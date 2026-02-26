// pages/HomePage.js

const BasePage = require('./BasePage');
const { expect } = require('@playwright/test');
const CartDrawer = require('./components/cartDrawer');

class HomePage extends BasePage {
  constructor(page) {
    super(page);

    // ===== HEADER =====
    this.logo = page.locator("//a[@data-testid='header-desktop-brand-link']//div[@class='header-logo']");
    this.searchBox = page.getByRole('button', { name: 'Search', exact: true });
   this.viewCartButton = page.getByTestId('header-desktop-cart-button');

    // Cart Component
    this.cartDrawer = new CartDrawer(page);

    // ===== HERO SECTION =====
    this.mainBanner = page
      .getByTestId('carousel-slide-5')
      .getByRole('img', { name: 'Carousel slide' });

    // ===== PRODUCT SECTION =====
    //this.addToCartButton = page.getByRole('link', { name: 'Wellcore - Pure Micronised Creatine Monohydrate (122g, 33 Servings) Fruit' }).getByTestId('productcard-add-to-cart')
    this.addToCartButton = page.getByTestId('productcard-add-to-cart').first();


    // ===== OTHER SECTIONS =====
    this.authorizedSellersSection = page.locator(
      "div.w-full.md\\:py-8.lg\\:py-\\[76px\\].px-5.overflow-hidden"
    );

    this.testimonialsSection = page.locator("section:nth-of-type(7)");
    this.faqSection = page.locator(".faq-widget");
    this.footerSection = page.locator("div.space-y-1.pr-0.lg\\:pr-10");
  }

  // ===============================
  // PAGE VALIDATIONS
  // ===============================

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

  async verifyAuthorizedSellersVisible() {
    await this.authorizedSellersSection.scrollIntoViewIfNeeded();
    await expect(this.authorizedSellersSection).toBeVisible();
  }

  async verifyTestimonialsVisible() {
    await this.testimonialsSection.scrollIntoViewIfNeeded();
    await expect(this.testimonialsSection).toBeVisible();
  }

  async verifyFAQVisible() {
    await this.faqSection.scrollIntoViewIfNeeded();
    await expect(this.faqSection).toBeVisible();
  }

  async verifyFooterVisible() {
    await this.footerSection.scrollIntoViewIfNeeded();
    await expect(this.footerSection).toBeVisible();
  }

  // ===============================
  // CART FLOW (ENTERPRISE VERSION)
  // ===============================

  async addProductAndValidateCart() {
    // Capture count before
    const countBefore = await this.cartDrawer.getCartCount();

    // Add product
    await this.addToCartButton.scrollIntoViewIfNeeded();
    await this.addToCartButton.click();

    // Wait for drawer
    await this.cartDrawer.waitForOpen();

    // Validate product details inside drawer
    await this.cartDrawer.validateProductVisible();
    await this.cartDrawer.validateQuantityVisible();

    // Capture count after
    const countAfter = await this.cartDrawer.getCartCount();

    // Validate increment
    expect(countAfter).toBe(countBefore + 1);
  }

  async clickViewCartFromHeader() {
    await expect(this.viewCartButton).toBeVisible();
    await this.viewCartButton.click();
  }
}

module.exports = HomePage;