import { type Page, type Locator, expect } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly cartBadge: Locator;
  readonly items: Locator;

  constructor(page: Page) {
    this.page = page;
    // The little red number that appears on the cart icon
    this.cartBadge = page.locator('.shopping_cart_badge');
    // The container for a single product
    this.items = page.locator('.inventory_item');
  }

  async addItemToCart(productName: string) {
    // 1. Find the item container that has the specific text (productName)
    // 2. Inside that container, find the button that says "Add to cart"
    // 3. Click it
    await this.items
        .filter({ hasText: productName })
        .getByRole('button', { name: 'Add to cart' })
        .click();
  }
}