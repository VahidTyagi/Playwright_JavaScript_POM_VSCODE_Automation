import { expect } from '@playwright/test';

export class CartPage {
  constructor(page) {
    this.page = page;

    // Header cart
    this.cartIcon = page.getByTestId('header-desktop-cart-button');
    this.cartOverlay = page.getByTestId('cart-overlay');

    // Products
    this.firstProductAdd = page.getByTestId('productcard-add-to-cart').first();

    // Quantity
    this.increaseQty = page.getByRole('button', { name: 'Increase quantity' });
    this.decreaseQty = page.getByRole('button', { name: 'Decrease quantity' });

    // Remove
    this.removeItem = page.getByRole('button', { name: 'Remove item' });

    // Add suggestions
    this.addSuggestion = page.getByRole('button', { name: '+ Add' });

    // Offers
    this.viewOffers = page.getByRole('button', { name: 'View All Offers' });
    this.closeOffers = page.getByRole('button', { name: 'Close offers modal' });

    // Checkout
    this.buyNow = page.getByRole('button', { name: 'Buy Now' }).first();
    this.checkoutIframe = page.locator('iframe[title="Checkout window"]');

  }

  async gotoHome() {
    await this.page.goto('https://store.wellversed.in/');
  }

  async addProductToCart() {
    await this.firstProductAdd.click();
  }

  async openCart() {
    await this.cartIcon.click();
  }

  async verifyCartOpen() {
    await expect(this.cartOverlay).toBeVisible();
  }

  async increaseQuantity(index = 0) {
    await this.increaseQty.nth(index).click();
  }

  async decreaseQuantity(index = 0) {
    await this.decreaseQty.nth(index).click();
  }

  async removeProduct(index = 0) {
    await this.removeItem.nth(index).click();
  }

  async addSuggestedProduct(index = 0) {
    await this.addSuggestion.nth(index).click();
  }

  async openOffers() {
    await this.viewOffers.click();
  }

  async closeOffersModal() {
    await this.closeOffers.click();
  }

  async clickBuyNow() {
    await this.buyNow.click();
  }

  async verifyCheckoutOpened() {
    await expect(this.checkoutIframe).toBeVisible();
  }
}








