// tests/homepage.spec.js

const { test } = require('@playwright/test');
const HomePage = require('../pages/HomePage');

test.describe('Homepage Test Cases', () => {

  test.beforeEach(async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigate('/');
  });

  test('TC01 - Verify Homepage Title', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.verifyTitle();
  });

  test('TC02 - Verify Logo Appears', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.verifyLogoVisible();
  });

  test('TC03 - Verify Search Box Appears', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.verifySearchBoxVisible();
  });

  test('TC04 - Verify Main Banner Appears', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.verifyMainBannerVisible();
  });

  test('TC05 - Add Product To Cart From Homepage', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.addProductToCart();
  });

  test('TC06 - Verify Authorized Sellers Section', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.verifyAuthorizedSellersVisible();
  });

  test('TC07 - Verify Testimonials Section', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.verifyTestimonialsVisible();
  });

  test('TC08 - Verify FAQ Section', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.verifyFAQVisible();
  });

  test('TC09 - Verify Footer Section', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.verifyFooterVisible();
  });

  test('TC10 - Verify View Cart Button Click', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.clickViewCart();
  });

});