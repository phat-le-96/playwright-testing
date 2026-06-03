import { test, expect } from "@playwright/test";

test("Add product 1 to cart twice and verify quantity is 2", async ({ page }) => {
  await test.step("Navigate to product page", async () => {
    await page.goto("https://material.playwrightvn.com/02-xpath-product-page.html");
  });

  await test.step("Click Add to Cart for Product 1 twice", async () => {
    const addToCartBtn = page.locator("(//button[@class='add-to-cart'])[1]");
    await addToCartBtn.click();
    await addToCartBtn.click();
  });

  await test.step("Verify quantity in shopping cart is 2", async () => {
    const quantity = page.locator("//td[text()='Product 1']/following-sibling::td[2]");
    await expect(quantity).toHaveText("2");
  });
});
