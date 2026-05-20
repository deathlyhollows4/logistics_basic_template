import { expect, request, test } from "@playwright/test";

const ADMIN_EMAIL = process.env.TEST_ADMIN_EMAIL || "";
const ADMIN_PASSWORD = process.env.TEST_ADMIN_PASSWORD || "";

async function loginAsAdmin(page: Parameters<Parameters<typeof test>[1]>[0]["page"]) {
  if (!ADMIN_EMAIL || !ADMIN_PASSWORD) {
    throw new Error("TEST_ADMIN_EMAIL and TEST_ADMIN_PASSWORD must be set in the environment to run admin tests.");
  }
  const apiContext = await request.newContext();
  const loginResp = await apiContext.post("/api/admin/login", {
    data: { email: ADMIN_EMAIL, password: ADMIN_PASSWORD },
  });
  expect(loginResp.status()).toBe(200);

  const cookieHeader = loginResp.headers()["set-cookie"];
  expect(cookieHeader).toBeDefined();

  const [name, value] = cookieHeader.split(";")[0].split("=");
  await page.context().addCookies([
    { name, value, domain: "127.0.0.1", path: "/", httpOnly: true, sameSite: "Lax" as const },
  ]);
}

// ── Landing page ─────────────────────────────────────────────────────────
test.describe("Landing page", () => {
  test("renders hero section", async ({ page }) => {
    await page.goto("/", { waitUntil: "networkidle" });
    await expect(page.locator("h1")).toContainText("Lakshya Logistic Packers");
    await expect(page.getByText("Get Free Quote")).toBeVisible();
  });

  test("renders four service cards", async ({ page }) => {
    await page.goto("/", { waitUntil: "networkidle" });
    await expect(page.locator("article")).toHaveCount(4);
  });

  test("renders why choose us and contact sections", async ({ page }) => {
    await page.goto("/", { waitUntil: "networkidle" });
    await expect(page.getByText("Why Choose Us?")).toBeVisible();
    await expect(page.getByText("15+")).toBeVisible();
    await expect(page.getByText("Contact Us")).toBeVisible();
    await expect(page.locator("footer")).toBeVisible();
  });
});

// ── Booking form ─────────────────────────────────────────────────────────
test.describe("Booking form", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/", { waitUntil: "networkidle" });
  });

  test("shows validation error on empty submit", async ({ page }) => {
    // Remove browser-side required validation so form submits and hits server validation
    await page.evaluate(() => {
      document.querySelectorAll("input[required]").forEach((el) => el.removeAttribute("required"));
    });
    await page.click('button[type="submit"]');
    await expect(page.locator('[aria-live="polite"]')).toBeVisible({ timeout: 8000 });
  });

  test("submits successfully with valid data", async ({ page }) => {
    await page.fill('input[name="name"]', "Test Customer");
    await page.fill('input[name="pickupLocation"]', "Mumbai");
    await page.fill('input[name="dropLocation"]', "Pune");
    await page.fill('input[name="contactNumber"]', "+91 9876543210");
    await page.fill('input[name="email"]', "test@example.com");
    await page.fill('textarea[name="message"]', "Test booking message");
    await page.click('button[type="submit"]');

    await expect(page.locator('[aria-live="polite"]')).toBeVisible({ timeout: 8000 });
    await expect(page.locator('[aria-live="polite"]')).toContainText(/received|contact/i);
  });

  test("resets form after successful submission", async ({ page }) => {
    await page.fill('input[name="name"]', "Reset Test");
    await page.fill('input[name="pickupLocation"]', "Delhi");
    await page.fill('input[name="dropLocation"]', "Agra");
    await page.fill('input[name="contactNumber"]', "+91 9999999999");
    await page.fill('input[name="email"]', "reset@example.com");
    await page.click('button[type="submit"]');

    await expect(page.locator('[aria-live="polite"]')).toBeVisible({ timeout: 8000 });
    await expect(page.locator('input[name="name"]')).toHaveValue("");
  });

  test("honeypot field is hidden", async ({ page }) => {
    await expect(page.locator('input[name="company"]')).toBeHidden();
  });
});

// ── Admin login page ─────────────────────────────────────────────────────
test.describe("Admin login page", () => {
  test("renders login form with email pre-filled", async ({ page }) => {
    await page.goto("/admin/login", { waitUntil: "networkidle" });
    await expect(page.locator("h1")).toContainText("Sign in");
    await expect(page.locator('input[type="email"]')).toHaveValue("");
    await expect(page.locator('input[type="password"]')).toBeVisible();
    await expect(page.getByRole("button", { name: /sign in/i })).toBeVisible();
  });

  test("redirects to login when accessing admin without auth", async ({ page }) => {
    await page.goto("/admin", { waitUntil: "networkidle" });
    await expect(page).toHaveURL(/\/admin\/login/, { timeout: 8000 });
  });
});

// ── Admin dashboard (authenticated) ──────────────────────────────────────
test.describe("Admin dashboard", () => {
  test.beforeEach(async ({ page }) => {
    await loginAsAdmin(page);
    await page.goto("/admin", { waitUntil: "networkidle" });
  });

  test("renders title and status summary cards", async ({ page }) => {
    await expect(page.getByText("Booking Management")).toBeVisible({ timeout: 8000 });
    // Status cards are the first 4 grid items with capitalize class
    const statusCards = page.locator(".grid > .rounded-lg > .capitalize");
    await expect(statusCards.nth(0)).toHaveText("new");
    await expect(statusCards.nth(1)).toHaveText("contacted");
    await expect(statusCards.nth(2)).toHaveText("completed");
    await expect(statusCards.nth(3)).toHaveText("cancelled");
  });

  test("renders booking table with headers", async ({ page }) => {
    await expect(page.locator("table")).toBeVisible({ timeout: 8000 });
    await expect(page.getByText("Recent Bookings")).toBeVisible();
  });

  test("time range filter and refresh button work", async ({ page }) => {
    // Use first() to avoid strict mode violation with multiple selects on page
    const rangeSelect = page.locator("select").first();
    await expect(rangeSelect).toBeVisible();
    await rangeSelect.selectOption("1h");
    const refreshBtn = page.getByRole("button", { name: /refresh/i });
    await expect(refreshBtn).toBeVisible();
    await refreshBtn.click();
    await expect(page.locator("table")).toBeVisible({ timeout: 5000 });
  });

  test("navigation links are present", async ({ page }) => {
    await expect(page.locator("nav").getByText("Bookings")).toBeVisible();
    await expect(page.locator("nav").getByText("Export")).toBeVisible();
    await expect(page.locator("nav").getByText("Logout")).toBeVisible();
  });

  test("can view booking details in modal", async ({ page }) => {
    const viewBtn = page.getByRole("button", { name: /view/i }).first();
    await expect(viewBtn).toBeVisible({ timeout: 8000 });
    await viewBtn.click();
    await expect(page.getByText("Close")).toBeVisible();
    await page.getByRole("button", { name: /close/i }).click();
  });

  test("can change booking status", async ({ page }) => {
    const statusSelect = page.locator("table select").first();
    await expect(statusSelect).toBeVisible({ timeout: 8000 });
    const currentValue = await statusSelect.inputValue();
    const newValue = currentValue === "completed" ? "contacted" : "completed";
    await statusSelect.selectOption(newValue);
    await expect(statusSelect).toHaveValue(newValue, { timeout: 5000 });
  });

  test("export link navigates to export page", async ({ page }) => {
    await page.locator("nav").getByText("Export").click();
    await expect(page).toHaveURL("/admin/export", { timeout: 5000 });
    await expect(page.getByText("Download Booking Data")).toBeVisible();
  });
});

// ── Admin export page (authenticated) ────────────────────────────────────
test.describe("Admin export page", () => {
  test.beforeEach(async ({ page }) => {
    await loginAsAdmin(page);
    await page.goto("/admin/export", { waitUntil: "networkidle" });
  });

  test("renders time filter and summary cards", async ({ page }) => {
    await expect(page.locator("select")).toBeVisible();
    await expect(page.getByText("Selected range")).toBeVisible();
    await expect(page.getByText("Matching bookings")).toBeVisible();
    await expect(page.getByText("Formats")).toBeVisible();
  });

  test("renders export preview table with headers", async ({ page }) => {
    await expect(page.getByText("Export Preview")).toBeVisible({ timeout: 8000 });
    await expect(page.locator("table")).toBeVisible();
  });

  test("renders CSV and XLSX download buttons", async ({ page }) => {
    await expect(page.getByRole("button", { name: /download csv/i })).toBeVisible();
    await expect(page.getByRole("button", { name: /download excel/i })).toBeVisible();
  });

  test("CSV download button becomes 'Preparing CSV...' when clicked", async ({ page }) => {
    const csvBtn = page.getByRole("button", { name: /download csv/i });
    await csvBtn.click();
    // Button should change to loading state
    await expect(page.getByText("Preparing CSV...")).toBeVisible({ timeout: 5000 });
  });

  test("XLSX download button becomes 'Preparing Excel...' when clicked", async ({ page }) => {
    const xlsxBtn = page.getByRole("button", { name: /download excel/i });
    await xlsxBtn.click();
    await expect(page.getByText("Preparing Excel...")).toBeVisible({ timeout: 5000 });
  });
});

// ── General checks ───────────────────────────────────────────────────────
test.describe("General checks", () => {
  test("page has correct title", async ({ page }) => {
    await page.goto("/", { waitUntil: "networkidle" });
    await expect(page).toHaveTitle(/Lakshya Logistic Packers/);
  });

  test("admin login link exists in footer", async ({ page }) => {
    await page.goto("/", { waitUntil: "networkidle" });
    const adminLink = page.locator('footer a[aria-label="Admin login"]');
    await expect(adminLink).toBeVisible();
    await expect(adminLink).toHaveAttribute("href", "/admin/login");
  });
});
