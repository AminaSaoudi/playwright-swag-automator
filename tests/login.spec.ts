import { test, expect } from '@playwright/test';
// Import the class we just created
import { LoginPage } from '../pages/LoginPage';

test('User can log in using Page Object Model', async ({ page }) => {
  // Create an instance of the LoginPage
  const loginPage = new LoginPage(page);

  // Use the methods we created inside the class
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  // Assertions usually stay in the test file
  await expect(page).toHaveURL(/inventory/);
});