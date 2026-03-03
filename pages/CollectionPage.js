const { expect } = require('@playwright/test');

class CollectionPage {
  constructor(page) {
    this.page = page;

    // ================================
    // Navigation
    // ================================
    this.collectionLink = page.getByRole('link', { name: 'Best Sellers' });

    // ================================
    // Product Section
    // ================================
    this.allProducts = page.locator('.text-sm.text-text');

    // Working Add-To-Cart button (first product)
    this.firstProductAddToCart =
      page.locator('.w-full.mt-2.font-bodyFont.py-\\[10px\\].rounded-md.flex.items-center.justify-center.gap-1.sm\\:gap-2.transition-colors.duration-300.border.border-primary-lighter.font-bold.text-base.no-underline.bg-primary-lighter')
        .first();

    // ================================
    // Cart Drawer
    // ================================
    this.goToCartButton = page.getByRole('button', { name: 'Go to cart' });
    this.cartOverlay = page.getByTestId('cart-overlay');
    this.cartItems = page.getByTestId('cart-items');

    this.increaseQtyBtn = page.getByRole('button', { name: 'Increase quantity' });
    this.decreaseQtyBtn = page.getByRole('button', { name: 'Decrease quantity' });

    this.headerCartButton = page.getByTestId('header-desktop-cart-button');

    // Checkout
    this.checkoutButton = page.locator('.checkout-btn');
  }

  // ================================
  // Navigation
  // ================================
  async gotoHome() {
    await this.page.goto('https://store.wellversed.in');
  }

  async gotoCollectionDirect() {
    await this.page.goto('https://store.wellversed.in/collections/best-sellers');
  }

  async navigateToCollection() {
    await this.collectionLink.click();
    await this.page.waitForURL('**/collections/best-sellers');
  }

  // ================================
  // Products
  // ================================
  async getProductCount() {
    return await this.allProducts.count();
  }

  async addFirstProductToCart() {
  await expect(this.firstProductAddToCart).toBeEnabled();
  await this.firstProductAddToCart.click();
}
  // ================================
  // Cart Actions
  // ================================
  async clickGoToCart() {
    await expect(this.goToCartButton).toBeVisible();
    await this.goToCartButton.click();
  }

  async increaseQuantity(times) {
    for (let i = 0; i < times; i++) {
      await this.increaseQtyBtn.click();
    }
  }

  async decreaseQuantity() {
    await this.decreaseQtyBtn.click();
  }

  async openCartFromHeader() {
    await this.headerCartButton.click();
  }

  async verifyCartOpened() {
    await expect(this.cartItems).toBeVisible();
  }

  async verifyCartOverlay() {
    await expect(this.cartOverlay).toBeVisible();
  }
}

module.exports = CollectionPage;