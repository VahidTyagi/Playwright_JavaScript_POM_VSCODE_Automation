// pages/HomePage.js

const BasePage = require('./BasePage');
const { expect } = require('@playwright/test');

class HomePage extends BasePage {
  constructor(page) {
    super(page);

    // Elements
    this.logo = page.locator("//a[@data-testid='header-desktop-brand-link']//div[@class='header-logo']");
    //this.searchBox = page.locator("input[placeholder='Shop for Health Supplements']");
    // find through codegen
    this.searchBox= page.getByRole('button', { name: 'Search', exact: true });
    //this.mainBanner = page.locator("div.flex.w-full.h-full img").first();
    // find through codegen
    this.mainBanner = page.getByTestId('carousel-slide-5').getByRole('img', { name: 'Carousel slide' });

    this.addToCartButton = page.locator("section:nth-of-type(3) button").first();
    this.authorizedSellersSection = page.locator("div.w-full.md\\:py-8.lg\\:py-\\[76px\\].px-5.overflow-hidden");
    this.testimonialsSection = page.locator("section:nth-of-type(7)");
    this.faqSection = page.locator(".faq-widget");
    this.footerSection = page.locator("div.space-y-1.pr-0.lg\\:pr-10");
    this.viewCartButton = page.getByTestId('header-desktop-cart-button').getByRole('img');
  }

  async verifyTitle() {
    await expect(this.page).toHaveTitle(
      "Best Bodybuilding & Gym Supplements Online - Wellversed"
    );
  }

  async verifyLogoVisible() {
    await expect(this.logo).toBeVisible();
  }

  async verifySearchBoxVisible() {
    await expect(this.searchBox).toBeVisible();
  }

  async verifyMainBannerVisible() {
    await expect(this.mainBanner).toBeVisible();
  }

  async addProductToCart() {
    await this.addToCartButton.scrollIntoViewIfNeeded();
    await this.addToCartButton.click();
  }

  async verifyAuthorizedSellersVisible() {
    await expect(this.authorizedSellersSection).toBeVisible();
  }

  async verifyTestimonialsVisible() {
    await expect(this.testimonialsSection).toBeVisible();
  }

  async verifyFAQVisible() {
    await expect(this.faqSection).toBeVisible();
  }

  async verifyFooterVisible() {
    await expect(this.footerSection).toBeVisible();
  }

  async clickViewCart() {
    await expect(this.viewCartButton).toBeVisible();
    await this.viewCartButton.click();
  }
}

module.exports = HomePage;