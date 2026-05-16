import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Tài liệu học automation test - Playwright Việt Nam");
});

test('has heading', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/');

  await page.locator('div.container a', { hasText: /^Bài học 1: Register Page/ }).click();

  await expect(page.locator('div.container h1')).toHaveText("User Registration");
});
