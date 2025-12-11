import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test('End-to-End: User can purchase an item', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const checkoutPage = new CheckoutPage(page);

  // 1. Login
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  // 2. Add Item
  await inventoryPage.addItemToCart('Sauce Labs Backpack');

  // 3. Go to Cart (We can add this locator inline or in a Page Object, inline is fine for now)
  await page.locator('.shopping_cart_link').click();

  // 4. Start Checkout
  await checkoutPage.checkoutButton.click();

  // 5. Fill Details
  await checkoutPage.enterDetails('John', 'Doe', '12345');

  // 6. Finish
  await checkoutPage.finishCheckout();

  // 7. Verify Success
  await expect(checkoutPage.completeHeader).toHaveText('Thank you for your Ranf!');
});