// pages/components/CartDrawer.js

const { expect } = require('@playwright/test');

class CartDrawer {
  constructor(page) {
    this.page = page;

    // Drawer root
    this.drawer = page.locator('[role="dialog"]');

    // Elements inside drawer
    this.productTitle = this.drawer.locator('h3, h4');
    this.quantityControl = this.drawer.locator('input[type="number"]');
    this.viewCartButton = this.drawer.locator('.bg-teal-600');

    // Header cart button (stable anchor)
    this.headerCartButton = page.getByTestId('header-desktop-cart-button');
  }

  // =========================
  // Drawer Actions
  // =========================

  async waitForOpen() {
    await expect(this.drawer).toBeVisible();
  }

  async validateProductVisible() {
    await expect(this.productTitle.first()).toBeVisible();
  }

  async validateQuantityVisible() {
    await expect(this.quantityControl.first()).toBeVisible();
  }

  async clickViewCart() {
    await expect(this.viewCartButton).toBeVisible();
    await this.viewCartButton.click();
  }

  // =========================
  // Cart Counter (Safe Logic)
  // =========================

  async getCartCount() {
    const counter = this.headerCartButton.locator('span');

    const count = await counter.count();

    // If no counter exists → cart is empty
    if (count === 0) {
      return 0;
    }

    const text = await counter.first().innerText();

    // Remove non-digits just in case
    const numericValue = text.replace(/\D/g, '');

    return Number(numericValue || 0);
  }
}

module.exports = CartDrawer;