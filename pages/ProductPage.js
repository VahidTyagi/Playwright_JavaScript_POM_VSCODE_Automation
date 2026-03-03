import { expect } from '@playwright/test';

export class ProductPage {
  constructor(page) {
    this.page = page;

    // Product Info
    this.productTitle = page.locator('h1');
    this.productPrice = page.getByText('Rs.', { exact: false }).first();
    this.discountBadge = page.getByTestId('pinfo-discount');

    // Images
    this.thumbnail1 = page.getByTestId('wpimg-thumb-1');
    this.thumbnail2 = page.getByTestId('wpimg-thumb-2');
    this.thumbnail3 = page.getByTestId('wpimg-thumb-3');
    this.thumbnailNext = page.getByTestId('wpimg-thumb-right');

    // Quantity (FIXED)
    this.quantityInput = page.getByRole('textbox', { name: /quantity/i });
    this.decreaseQty = page.locator('[data-testid="qty-decrease"]'); 
    this.increaseQty = page.locator('[data-testid="qty-increase"]');

    // Buttons
    this.addToCartBtn = page.getByRole('button', { name: /Add to Cart/i }).first();
    this.buyNowBtn = page.getByRole('button', { name: /Buy Now/i }).first();
    this.viewAllOffersBtn = page.getByRole('button', { name: /View All Offers/i });
    this.closeOffersModal = page.getByRole('button', { name: /Close/i });

    // Cart (UPDATED – no overlay validation)
    this.cartDrawerHeading = page.getByRole('heading', { name: /Your Cart/i });
    this.cartItemCountBadge = page.getByTestId('header-desktop-cart-button');
    this.removeItemBtn = page.getByRole('button', { name: /Remove/i });

    // Reviews iframe
    this.reviewWidget = page.locator('iframe[title="Reviews widget"]');
  }

  async navigate() {
    await this.page.goto('https://store.wellversed.in/');
    await this.page.getByRole('link', { name: /Dynamite Pre-Workout/i }).first().click();
    await expect(this.productTitle).toBeVisible();
  }

  async addToCart() {
    await expect(this.addToCartBtn).toBeEnabled();
    await this.addToCartBtn.click();

    // Wait for cart drawer business state
    await expect(this.cartDrawerHeading).toBeVisible();
  }

  async increaseQuantity(times = 1) {
    const initialValue = Number(await this.quantityInput.inputValue());

    for (let i = 0; i < times; i++) {
      await this.increaseQty.click();
    }

    await expect(this.quantityInput)
      .toHaveValue(String(initialValue + times));
  }

  async decreaseQuantity() {
    const initialValue = Number(await this.quantityInput.inputValue());

    await this.decreaseQty.click();

    await expect(this.quantityInput)
      .toHaveValue(String(initialValue - 1));
  }

  async openOffers() {
    await this.viewAllOffersBtn.click();
  }

  async closeOffers() {
    await this.closeOffersModal.click();
  }

  async openBuyNow() {
    await this.buyNowBtn.click();
  }

  async clickThumbnails() {
    await this.thumbnail1.click();
    await this.thumbnail2.click();
    await this.thumbnail3.click();
    await this.thumbnailNext.click();
  }
}