import { test, expect } from '@playwright/test';
import { FooterPage } from '../pages/FooterPage';

test.describe('Footer Module', () => {

  test('Verify Privacy Policy link', async ({ page }) => {

    const footer = new FooterPage(page);

    await footer.openHomePage();
    await footer.scrollToFooter();
    await footer.clickPrivacyPolicy();

    await expect(page).toHaveURL(/privacy/);

  });


  test('Verify Refund Policy link', async ({ page }) => {

    const footer = new FooterPage(page);

    await footer.openHomePage();
    await footer.scrollToFooter();
    await footer.clickRefundPolicy();

    await expect(page).toHaveURL(/refund/);

  });


  test('Verify Shipping Policy link', async ({ page }) => {

    const footer = new FooterPage(page);

    await footer.openHomePage();
    await footer.scrollToFooter();
    await footer.clickShippingPolicy();

    await expect(page).toHaveURL(/shipping/);

  });


  test('Verify Become Partner link', async ({ page }) => {

    const footer = new FooterPage(page);

    await footer.openHomePage();
    await footer.scrollToFooter();
    await footer.clickBecomePartner();

  });


  test('Verify Authorized Sellers page opens', async ({ page }) => {

    const footer = new FooterPage(page);

    await footer.openHomePage();
    await footer.scrollToFooter();
    await footer.clickAuthorizedSeller();

  });


  test('Verify About Us page opens', async ({ page }) => {

    const footer = new FooterPage(page);

    await footer.openHomePage();
    await footer.scrollToFooter();
    await footer.clickAboutUs();

  });


  test('Verify support email link', async ({ page }) => {

    const footer = new FooterPage(page);

    await footer.openHomePage();
    await footer.scrollToFooter();
    await footer.clickSupportEmail();

  });


  test('Verify Facebook link opens', async ({ page }) => {

    const footer = new FooterPage(page);

    await footer.openHomePage();
    await footer.scrollToFooter();

    const popupPromise = page.waitForEvent('popup');
    await footer.facebook.click();
    const popup = await popupPromise;

    await expect(popup).toBeTruthy();

  });


  test('Verify Instagram link opens', async ({ page }) => {

    const footer = new FooterPage(page);

    await footer.openHomePage();
    await footer.scrollToFooter();

    const popupPromise = page.waitForEvent('popup');
    await footer.instagram.click();
    const popup = await popupPromise;

    await expect(popup).toBeTruthy();

  });


  test('Verify footer section is visible', async ({ page }) => {

    const footer = new FooterPage(page);

    await footer.openHomePage();
    await footer.scrollToFooter();

    await expect(footer.privacyPolicy).toBeVisible();

  });

});


