
import { expect } from '@playwright/test';

export class CheckoutPage {

    constructor(page) {
        this.page = page;

        // Product page locators
        this.productLink = page.getByRole('link', { name: /Dynamite Pre-Workout/i });
        this.buyNowButton = page.getByRole('button', { name: 'Buy Now' }).first();

        // Checkout iframe
        this.checkoutFrame = page.frameLocator('iframe[title="Checkout window"]');

        // Checkout locators
        this.mobileInput = this.checkoutFrame.getByRole('textbox', { name: 'Enter Mobile Number' });
        this.continueButton = this.checkoutFrame.getByRole('button', { name: 'Continue' });

        // Product info
        this.productItem = this.checkoutFrame.locator('text=Dynamite Pre-Workout');
    }

    async openHomePage() {
        await this.page.goto('https://store.wellversed.in/');
    }

    async openProduct() {
        await this.productLink.click();
    }

    async clickBuyNow() {
        await this.buyNowButton.click();
    }

    async verifyCheckoutLoaded() {
        await expect(this.mobileInput).toBeVisible();
    }

    async enterMobileNumber(number) {
        await this.mobileInput.fill(number);
    }

    async clickContinue() {
        await this.continueButton.click();
    }

    async verifyProductVisible() {
        await expect(this.productItem).toBeVisible();
    }

}







