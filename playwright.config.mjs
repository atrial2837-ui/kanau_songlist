import { defineConfig } from '@playwright/test';

const PORT = Number(process.env.PORT || 4173);

export default defineConfig({
  testDir: './tests/e2e',
  testMatch: '**/*.spec.mjs',
  timeout: 30_000,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: process.env.CI ? 'github' : 'list',
  use: {
    baseURL: `http://localhost:${PORT}`,
    viewport: { width: 1280, height: 800 },
    // sw.js の cache-first 配信がテスト間で古いアセットを掴むのを防ぐ
    serviceWorkers: 'block',
    trace: 'retain-on-failure',
  },
  webServer: {
    command: 'node scripts/serve-docs.mjs',
    port: PORT,
    reuseExistingServer: !process.env.CI,
  },
});
