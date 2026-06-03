import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  testMatch: '**/*.spec.ts',

  use: {
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: {
        // ...devices['Desktop Chrome']
        viewport: null,
        headless: false,
        launchOptions: {
          args: ['--start-maximized']
        },
      },
      
    },
  ],
});
