import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://e-commerce-dev.betterbytesvn.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("E-commerce site for automation testing");
});

test('has heading', async ({ page }) => {
  await page.goto('https://e-commerce-dev.betterbytesvn.com/');
  await page.locator('div.home-page-header a', { hasText: 'My account' }).click();
  await expect(page.locator('h1.vw-page-title')).toHaveText('My account');
});
