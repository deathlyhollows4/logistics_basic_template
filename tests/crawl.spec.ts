import { expect, test } from "@playwright/test";

const ADMIN_EMAIL = "vidhantomar2004@gmail.com";
const ADMIN_PASSWORD = "Vidhan@135";

// ── Helper: login via form (works on real domain) ─────────────────────────
async function loginViaForm(page: Parameters<Parameters<typeof test>[1]>[0]["page"]) {
  await page.goto("/admin/login", { waitUntil: "networkidle" });
  await page.fill('input[type="email"]', ADMIN_EMAIL);
  await page.fill('input[type="password"]', ADMIN_PASSWORD);
  await page.click('button[type="submit"]');
  // Wait for redirect to /admin
  await expect(page).toHaveURL(/\/admin$/, { timeout: 10000 });
}

// ── Public: Landing page ──────────────────────────────────────────────────
test.describe("Public: Landing page", () => {
  test("renders hero and booking form", async ({ page }) => {
    await page.goto("/", { waitUntil: "networkidle" });
    await expect(page.locator("h1")).toContainText("Lakshya Logistic Packers");
    await expect(page.getByText("Get Free Quote")).toBeVisible();
    await expect(page.locator('input[name="name"]')).toBeVisible();
    await expect(page.locator('input[name="pickupLocation"]')).toBeVisible();
    await expect(page.locator('input[name="dropLocation"]')).toBeVisible();
    await expect(page.locator('input[name="contactNumber"]')).toBeVisible();
    await expect(page.locator('input[name="email"]')).toBeVisible();
  });

  test("renders services, why choose us, contact, footer", async ({ page }) => {
    await page.goto("/", { waitUntil: "networkidle" });
    await expect(page.locator("article")).toHaveCount(4);
    await expect(page.getByText("Why Choose Us?")).toBeVisible();
    await expect(page.getByText("15+")).toBeVisible();
    await expect(page.getByText("12K+")).toBeVisible();
    await expect(page.getByText("Contact Us")).toBeVisible();
    await expect(page.locator("footer")).toBeVisible();
  });

  test("page title is correct", async ({ page }) => {
    await page.goto("/", { waitUntil: "networkidle" });
    await expect(page).toHaveTitle(/Lakshya Logistic Packers/);
  });
});

// ── Public: Booking form ──────────────────────────────────────────────────
test.describe("Public: Booking form", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/", { waitUntil: "networkidle" });
  });

  test("shows validation error on empty submit", async ({ page }) => {
    await page.evaluate(() => {
      document.querySelectorAll("input[required]").forEach((el) => el.removeAttribute("required"));
    });
    await page.click('button[type="submit"]');
    await expect(page.locator('[aria-live="polite"]')).toBeVisible({ timeout: 10000 });
  });

  test("submits successfully and resets form", async ({ page }) => {
    await page.fill('input[name="name"]', "Crawl Test User");
    await page.fill('input[name="pickupLocation"]', "Chennai");
    await page.fill('input[name="dropLocation"]', "Bangalore");
    await page.fill('input[name="contactNumber"]', "+91 9988776655");
    await page.fill('input[name="email"]', "crawl@example.com");
    await page.fill('textarea[name="message"]', "Crawl test booking");

    await page.click('button[type="submit"]');
    await expect(page.locator('[aria-live="polite"]')).toBeVisible({ timeout: 10000 });
    await expect(page.locator('[aria-live="polite"]')).toContainText(/received|contact/i);

    // Form should clear on success
    await expect(page.locator('input[name="name"]')).toHaveValue("");
  });

  test("honeypot field is hidden from users", async ({ page }) => {
    await expect(page.locator('input[name="company"]')).toBeHidden();
  });
});

// ── Admin: Login page ─────────────────────────────────────────────────────
test.describe("Admin: Login page", () => {
  test("renders login form with email pre-filled", async ({ page }) => {
    await page.goto("/admin/login", { waitUntil: "networkidle" });
    await expect(page.locator("h1")).toContainText("Sign in");
    await expect(page.locator('input[type="email"]')).toHaveValue(ADMIN_EMAIL);
    await expect(page.locator('input[type="password"]')).toBeVisible();
    await expect(page.getByRole("button", { name: /sign in/i })).toBeVisible();
  });

  test("shows error on invalid credentials", async ({ page }) => {
    await page.goto("/admin/login", { waitUntil: "networkidle" });
    await page.fill('input[type="email"]', ADMIN_EMAIL);
    await page.fill('input[type="password"]', "wrongpassword");
    await page.click('button[type="submit"]');
    await expect(page.locator('[aria-live="polite"]')).toBeVisible({ timeout: 10000 });
    await expect(page.locator('[aria-live="polite"]')).toContainText(/invalid/i);
  });

  test("successful login redirects to dashboard", async ({ page }) => {
    await page.goto("/admin/login", { waitUntil: "networkidle" });
    await page.fill('input[type="email"]', ADMIN_EMAIL);
    await page.fill('input[type="password"]', ADMIN_PASSWORD);
    await page.click('button[type="submit"]');
    await expect(page).toHaveURL(/\/admin$/, { timeout: 10000 });
  });

  test("unauthenticated user is redirected to login", async ({ page }) => {
    await page.goto("/admin", { waitUntil: "networkidle" });
    await expect(page).toHaveURL(/\/admin\/login/, { timeout: 10000 });
  });
});

// ── Admin: Dashboard (authenticated) ──────────────────────────────────────
test.describe("Admin: Dashboard", () => {
  test.beforeEach(async ({ page }) => {
    await loginViaForm(page);
  });

  test("renders title and 4 status summary cards", async ({ page }) => {
    await expect(page.getByText("Booking Management")).toBeVisible({ timeout: 8000 });
    const statusCards = page.locator(".grid > .rounded-lg > .capitalize");
    await expect(statusCards.nth(0)).toHaveText("new");
    await expect(statusCards.nth(1)).toHaveText("contacted");
    await expect(statusCards.nth(2)).toHaveText("completed");
    await expect(statusCards.nth(3)).toHaveText("cancelled");
  });

  test("renders recent bookings table with headers", async ({ page }) => {
    await expect(page.locator("table")).toBeVisible({ timeout: 8000 });
    await expect(page.getByText("Recent Bookings")).toBeVisible();
    await expect(page.locator("thead")).toContainText("Customer");
    await expect(page.locator("thead")).toContainText("Route");
    await expect(page.locator("thead")).toContainText("Contact");
    await expect(page.locator("thead")).toContainText("Status");
  });

  test("time range filter and refresh work", async ({ page }) => {
    const rangeSelect = page.locator("select").first();
    await expect(rangeSelect).toBeVisible({ timeout: 8000 });
    await rangeSelect.selectOption("1h");
    const refreshBtn = page.getByRole("button", { name: /refresh/i });
    await expect(refreshBtn).toBeVisible();
    await refreshBtn.click();
    await expect(page.locator("table")).toBeVisible({ timeout: 8000 });
  });

  test("can view booking detail modal", async ({ page }) => {
    const viewBtn = page.getByRole("button", { name: /view/i }).first();
    await expect(viewBtn).toBeVisible({ timeout: 8000 });
    await viewBtn.click();
    await expect(page.getByText("Close")).toBeVisible({ timeout: 5000 });
    await expect(page.getByText("Pickup")).toBeVisible();
    await expect(page.getByText("Drop")).toBeVisible();
    await expect(page.getByText("Email")).toBeVisible();
    await page.getByRole("button", { name: /close/i }).click();
  });

  test("can change booking status", async ({ page }) => {
    const statusSelect = page.locator("table select").first();
    await expect(statusSelect).toBeVisible({ timeout: 8000 });
    const current = await statusSelect.inputValue();
    const next = current === "completed" ? "contacted" : "completed";
    await statusSelect.selectOption(next);
    await expect(statusSelect).toHaveValue(next, { timeout: 5000 });
  });

  test("navigation: Bookings, Export, Logout visible", async ({ page }) => {
    await expect(page.locator("nav").getByText("Bookings")).toBeVisible();
    await expect(page.locator("nav").getByText("Export")).toBeVisible();
    await expect(page.locator("nav").getByText("Logout")).toBeVisible();
  });
});

// ── Admin: Export page (authenticated) ────────────────────────────────────
test.describe("Admin: Export page", () => {
  test.beforeEach(async ({ page }) => {
    await loginViaForm(page);
    await page.locator("nav").getByText("Export").click();
    await expect(page).toHaveURL("/admin/export", { timeout: 8000 });
  });

  test("renders time filter, summary cards, and preview table", async ({ page }) => {
    await expect(page.getByText("Download Booking Data")).toBeVisible();
    await expect(page.locator("select")).toBeVisible();
    await expect(page.getByText("Selected range")).toBeVisible();
    await expect(page.getByText("Matching bookings")).toBeVisible();
    await expect(page.getByText("Formats")).toBeVisible();
    await expect(page.getByText("Export Preview")).toBeVisible();
    await expect(page.locator("table")).toBeVisible();
  });

  test("renders CSV and Excel download buttons", async ({ page }) => {
    await expect(page.getByRole("button", { name: /download csv/i })).toBeVisible();
    await expect(page.getByRole("button", { name: /download excel/i })).toBeVisible();
  });

  test("CSV download button shows loading state on click", async ({ page }) => {
    const csvBtn = page.getByRole("button", { name: /download csv/i });
    await csvBtn.click();
    await expect(page.getByText("Preparing CSV...")).toBeVisible({ timeout: 5000 });
    // Wait for download to complete, button should revert
    await expect(page.getByRole("button", { name: /download csv/i })).toBeVisible({ timeout: 10000 });
  });

  test("XLSX download button shows loading state on click", async ({ page }) => {
    const xlsxBtn = page.getByRole("button", { name: /download excel/i });
    await xlsxBtn.click();
    await expect(page.getByText("Preparing Excel...")).toBeVisible({ timeout: 5000 });
    await expect(page.getByRole("button", { name: /download excel/i })).toBeVisible({ timeout: 10000 });
  });

  test("downloads CSV file successfully", async ({ page }) => {
    const [download] = await Promise.all([
      page.waitForEvent("download", { timeout: 15000 }),
      page.getByRole("button", { name: /download csv/i }).click(),
    ]);
    expect(download.suggestedFilename()).toMatch(/lakshya-bookings-.*\.csv/);
  });

  test("downloads XLSX file successfully", async ({ page }) => {
    const [download] = await Promise.all([
      page.waitForEvent("download", { timeout: 15000 }),
      page.getByRole("button", { name: /download excel/i }).click(),
    ]);
    expect(download.suggestedFilename()).toMatch(/lakshya-bookings-.*\.xlsx/);
  });
});

// ── Admin: Logout ─────────────────────────────────────────────────────────
test.describe("Admin: Logout", () => {
  test("logout redirects to login page", async ({ page }) => {
    await loginViaForm(page);
    await page.locator("nav").getByText("Logout").click();
    await expect(page).toHaveURL(/\/admin\/login/, { timeout: 8000 });
  });
});
