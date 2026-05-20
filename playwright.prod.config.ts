import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "tests",
  testMatch: "crawl.spec.ts",
  timeout: 30000,
  retries: 1,
  use: {
    baseURL: "https://logistic.goateddd.com",
    headless: true,
    ignoreHTTPSErrors: true,
  },
});
