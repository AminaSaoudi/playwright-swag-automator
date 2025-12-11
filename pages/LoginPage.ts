import { type Page, type Locator, expect } from '@playwright/test';

export class LoginPage {
  // We define the page variable
  readonly page: Page;
  // We define variables for our elements (Locators)
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    // We initialize the locators here
    this.usernameInput = page.locator('[data-test="username"]');
    this.passwordInput = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-button"]');
  }

  // This method handles the action of navigating
  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  // This method handles the logic of logging in
  async login(username: string, pass: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(pass);
    await this.loginButton.click();
  }
}