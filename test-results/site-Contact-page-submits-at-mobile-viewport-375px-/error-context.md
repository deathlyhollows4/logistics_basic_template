# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: site.spec.ts >> Contact page >> submits at mobile viewport (375px)
- Location: tests\site.spec.ts:98:3

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('[aria-live="polite"]')
Expected pattern: /sent|received|contact/i
Received string:  "Too many requests. Please try again in a few minutes."
Timeout: 5000ms

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('[aria-live="polite"]')
    14 × locator resolved to <p aria-live="polite" class="text-sm text-red-700">Too many requests. Please try again in a few minu…</p>
       - unexpected value "Too many requests. Please try again in a few minutes."

```

```yaml
- paragraph: Too many requests. Please try again in a few minutes.
```

# Test source

```ts
  8   | // ── Landing page ─────────────────────────────────────────────────────────
  9   | test.describe("Landing page", () => {
  10  |   test("renders hero section", async ({ page }) => {
  11  |     await page.goto("/", { waitUntil: "networkidle" });
  12  |     await expect(page.locator("h1")).toContainText("Lakshya Logistic Packers");
  13  |     await expect(page.getByText("Get Free Quote")).toBeVisible();
  14  |   });
  15  | 
  16  |   test("renders four service cards", async ({ page }) => {
  17  |     await page.goto("/", { waitUntil: "networkidle" });
  18  |     await expect(page.locator("article")).toHaveCount(4);
  19  |   });
  20  | 
  21  |   test("renders why choose us and contact sections", async ({ page }) => {
  22  |     await page.goto("/", { waitUntil: "networkidle" });
  23  |     await expect(page.getByText("Why Choose Us?")).toBeVisible();
  24  |     await expect(page.getByText("15+").first()).toBeVisible();
  25  |     await expect(page.getByText("Contact Us")).toBeVisible();
  26  |     await expect(page.locator("footer")).toBeVisible();
  27  |   });
  28  | });
  29  | 
  30  | // ── Booking form ─────────────────────────────────────────────────────────
  31  | test.describe.serial("Booking form", () => {
  32  |   test.beforeEach(async ({ page }) => {
  33  |     await page.goto("/", { waitUntil: "networkidle" });
  34  |   });
  35  | 
  36  |   test("shows validation error on empty submit", async ({ page }) => {
  37  |     // Remove browser-side required validation so form submits and hits server validation
  38  |     await page.evaluate(() => {
  39  |       document.querySelectorAll("input[required]").forEach((el) => el.removeAttribute("required"));
  40  |     });
  41  |     await page.click('button[type="submit"]');
  42  |     await expect(page.locator('[aria-live="polite"]')).toBeVisible({ timeout: 8000 });
  43  |   });
  44  | 
  45  |   test("submits successfully with valid data", async ({ page }) => {
  46  |     await page.fill('input[name="name"]', "Test Customer");
  47  |     await page.fill('input[name="pickupLocation"]', "Mumbai");
  48  |     await page.fill('input[name="dropLocation"]', "Pune");
  49  |     await page.fill('input[name="contactNumber"]', "+91 9876543210");
  50  |     await page.fill('input[name="email"]', "test@example.com");
  51  |     await page.fill('textarea[name="message"]', "Test booking message");
  52  |     await page.click('button[type="submit"]');
  53  | 
  54  |     await expect(page.locator('[aria-live="polite"]')).toBeVisible({ timeout: 8000 });
  55  |     await expect(page.locator('[aria-live="polite"]')).toContainText(/received|contact/i);
  56  |   });
  57  | 
  58  |   test("resets form after successful submission", async ({ page }) => {
  59  |     await page.fill('input[name="name"]', "Reset Test");
  60  |     await page.fill('input[name="pickupLocation"]', "Delhi");
  61  |     await page.fill('input[name="dropLocation"]', "Agra");
  62  |     await page.fill('input[name="contactNumber"]', "+91 9999999999");
  63  |     await page.fill('input[name="email"]', "reset@example.com");
  64  |     await page.click('button[type="submit"]');
  65  | 
  66  |     await expect(page.locator('[aria-live="polite"]')).toBeVisible({ timeout: 8000 });
  67  |     await expect(page.locator('input[name="name"]')).toHaveValue("");
  68  |   });
  69  | 
  70  |   test("honeypot field is hidden", async ({ page }) => {
  71  |     await expect(page.locator('input[name="company"]')).toBeHidden();
  72  |   });
  73  | });
  74  | 
  75  | // ── Contact page ─────────────────────────────────────────────────────────
  76  | test.describe.serial("Contact page", () => {
  77  |   test("renders contact form with heading", async ({ page }) => {
  78  |     await page.goto("/contact", { waitUntil: "networkidle" });
  79  |     await expect(page.getByText("Send Us a Message")).toBeVisible();
  80  |     await expect(page.locator('input[name="name"]')).toBeVisible();
  81  |     await expect(page.locator('input[name="email"]')).toBeVisible();
  82  |     await expect(page.locator('textarea[name="message"]')).toBeVisible();
  83  |     await expect(page.getByRole("button", { name: /send message/i })).toBeVisible();
  84  |   });
  85  | 
  86  |   test("submits successfully with valid data", async ({ page }) => {
  87  |     await page.goto("/contact", { waitUntil: "networkidle" });
  88  |     await page.fill('input[name="name"]', "Test Customer");
  89  |     await page.fill('input[name="mobileNumber"]', "+91 9876543210");
  90  |     await page.fill('input[name="email"]', "test@example.com");
  91  |     await page.fill('textarea[name="message"]', "Test contact message");
  92  |     await page.click('button[type="submit"]');
  93  | 
  94  |     await expect(page.locator('[aria-live="polite"]')).toBeVisible({ timeout: 8000 });
  95  |     await expect(page.locator('[aria-live="polite"]')).toContainText(/sent|received|contact/i);
  96  |   });
  97  | 
  98  |   test("submits at mobile viewport (375px)", async ({ page }) => {
  99  |     await page.setViewportSize({ width: 375, height: 812 });
  100 |     await page.goto("/contact", { waitUntil: "networkidle" });
  101 |     await page.fill('input[name="name"]', "Mobile User");
  102 |     await page.fill('input[name="mobileNumber"]', "+91 9876543210");
  103 |     await page.fill('input[name="email"]', "mobile@example.com");
  104 |     await page.fill('textarea[name="message"]', "Mobile test message");
  105 |     await page.click('button[type="submit"]');
  106 | 
  107 |     await expect(page.locator('[aria-live="polite"]')).toBeVisible({ timeout: 8000 });
> 108 |     await expect(page.locator('[aria-live="polite"]')).toContainText(/sent|received|contact/i);
      |                                                        ^ Error: expect(locator).toContainText(expected) failed
  109 |   });
  110 | });
  111 | 
  112 | // ── Admin login page ─────────────────────────────────────────────────────
  113 | test.describe("Admin login page", () => {
  114 |   test("renders login form with email pre-filled", async ({ page }) => {
  115 |     await page.goto("/admin/login", { waitUntil: "networkidle" });
  116 |     await expect(page.locator("h1")).toContainText("Sign in");
  117 |     await expect(page.locator('input[type="email"]')).toHaveValue("");
  118 |     await expect(page.locator('input[type="password"]')).toBeVisible();
  119 |     await expect(page.getByRole("button", { name: /sign in/i })).toBeVisible();
  120 |   });
  121 | 
  122 |   test("redirects to login when accessing admin without auth", async ({ page }) => {
  123 |     await page.goto("/admin", { waitUntil: "networkidle" });
  124 |     await expect(page).toHaveURL(/\/admin\/login/, { timeout: 8000 });
  125 |   });
  126 | 
  127 |   test("shows error on invalid credentials", async ({ page }) => {
  128 |     await page.goto("/admin/login", { waitUntil: "networkidle" });
  129 |     await page.fill('input[type="email"]', "vidhantomar2004@gmail.com");
  130 |     await page.fill('input[type="password"]', "wrongpassword");
  131 |     await page.click('button[type="submit"]');
  132 |     await expect(page.locator('[aria-live="polite"]')).toBeVisible({ timeout: 10000 });
  133 |     await expect(page.locator('[aria-live="polite"]')).toContainText(/invalid/i);
  134 |   });
  135 | });
  136 | 
  137 | // ── Admin dashboard (authenticated) ──────────────────────────────────────
  138 | test.describe("Admin dashboard", () => {
  139 |   test.beforeEach(async ({ page }) => {
  140 |     await loginAsAdmin(page);
  141 |     await page.goto("/admin", { waitUntil: "networkidle" });
  142 |   });
  143 | 
  144 |   test("renders title and status summary cards", async ({ page }) => {
  145 |     await expect(page.getByText("Booking Management")).toBeVisible({ timeout: 8000 });
  146 |     // Status cards are the first 4 grid items with capitalize class
  147 |     const statusCards = page.locator(".grid > .rounded-lg > .capitalize");
  148 |     await expect(statusCards.nth(0)).toHaveText("new");
  149 |     await expect(statusCards.nth(1)).toHaveText("contacted");
  150 |     await expect(statusCards.nth(2)).toHaveText("completed");
  151 |     await expect(statusCards.nth(3)).toHaveText("cancelled");
  152 |   });
  153 | 
  154 |   test("renders booking table with headers", async ({ page }) => {
  155 |     await expect(page.locator("table")).toBeVisible({ timeout: 8000 });
  156 |     await expect(page.getByText("Recent Bookings")).toBeVisible();
  157 |   });
  158 | 
  159 |   test("time range filter and refresh button work", async ({ page }) => {
  160 |     // Use first() to avoid strict mode violation with multiple selects on page
  161 |     const rangeSelect = page.locator("select").first();
  162 |     await expect(rangeSelect).toBeVisible();
  163 |     await rangeSelect.selectOption("1h");
  164 |     const refreshBtn = page.getByRole("button", { name: /refresh/i });
  165 |     await expect(refreshBtn).toBeVisible();
  166 |     await refreshBtn.click();
  167 |     await expect(page.locator("table")).toBeVisible({ timeout: 5000 });
  168 |   });
  169 | 
  170 |   test("navigation links are present", async ({ page }) => {
  171 |     await expect(page.locator("nav").getByText("Bookings")).toBeVisible();
  172 |     await expect(page.locator("nav").getByText("Export")).toBeVisible();
  173 |     await expect(page.locator("nav").getByText("Logout")).toBeVisible();
  174 |   });
  175 | 
  176 |   test("can view booking details in modal", async ({ page }) => {
  177 |     const viewBtn = page.getByRole("button", { name: /view/i }).first();
  178 |     await expect(viewBtn).toBeVisible({ timeout: 8000 });
  179 |     await viewBtn.click();
  180 |     await expect(page.getByText("Close")).toBeVisible();
  181 |     await page.getByRole("button", { name: /close/i }).click();
  182 |   });
  183 | 
  184 |   test("can change booking status", async ({ page }) => {
  185 |     const statusSelect = page.locator("table select").first();
  186 |     await expect(statusSelect).toBeVisible({ timeout: 8000 });
  187 |     const currentValue = await statusSelect.inputValue();
  188 |     const newValue = currentValue === "completed" ? "contacted" : "completed";
  189 |     await statusSelect.selectOption(newValue);
  190 |     await expect(statusSelect).toHaveValue(newValue, { timeout: 5000 });
  191 |   });
  192 | 
  193 |   test("export link navigates to export page", async ({ page }) => {
  194 |     await page.locator("nav").getByText("Export").click();
  195 |     await expect(page).toHaveURL("/admin/export", { timeout: 5000 });
  196 |     await expect(page.getByText("Download Booking Data")).toBeVisible();
  197 |   });
  198 | });
  199 | 
  200 | // ── Admin export page (authenticated) ────────────────────────────────────
  201 | test.describe("Admin export page", () => {
  202 |   test.beforeEach(async ({ page }) => {
  203 |     await loginAsAdmin(page);
  204 |     await page.goto("/admin/export", { waitUntil: "networkidle" });
  205 |   });
  206 | 
  207 |   test("renders time filter and summary cards", async ({ page }) => {
  208 |     await expect(page.locator("select")).toBeVisible();
```