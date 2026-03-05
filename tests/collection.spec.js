const { test, expect } = require('@playwright/test');
const CollectionPage = require('../pages/CollectionPage');

test.describe('Collection Module - Independent Tests', () => {

  test('TC01 - Homepage Loads', async ({ page }) => {
    const collection = new CollectionPage(page);
    await collection.gotoHome();
    await expect(page).toHaveTitle(/Wellversed/);
  });

  test('TC02 - Navigate to Collection from Menu', async ({ page }) => {
    const collection = new CollectionPage(page);
    await collection.gotoHome();
    await collection.navigateToCollection();
    await expect(page).toHaveURL(/best-sellers/);
  });

  test('TC03 - Direct Collection URL Loads', async ({ page }) => {
    const collection = new CollectionPage(page);
    await collection.gotoCollectionDirect();
    await expect(page).toHaveURL(/best-sellers/);
  });

  test('TC04 - Products Are Displayed', async ({ page }) => {
    const collection = new CollectionPage(page);
    await collection.gotoCollectionDirect();
    const count = await collection.getProductCount();
    expect(count).toBeGreaterThan(0);
  });

  test('TC05 - Add First Product To Cart', async ({ page }) => {
    const collection = new CollectionPage(page);
    await collection.gotoCollectionDirect();
    await collection.addFirstProductToCart();
    await collection.verifyCartOverlay();
  });

  test('TC06 - Go To Cart Button Works', async ({ page }) => {
    const collection = new CollectionPage(page);
    await collection.gotoCollectionDirect();
    await collection.addFirstProductToCart();
    await collection.clickGoToCart();
    await collection.verifyCartOpened();
  });

  test('TC07 - Increase Quantity', async ({ page }) => {
    const collection = new CollectionPage(page);
    await collection.gotoCollectionDirect();
    await collection.addFirstProductToCart();
    await collection.clickGoToCart();
    await collection.increaseQuantity(2);
  });

  test('TC08 - Decrease Quantity', async ({ page }) => {
    const collection = new CollectionPage(page);
    await collection.gotoCollectionDirect();
    await collection.addFirstProductToCart();
    await collection.clickGoToCart();
    await collection.decreaseQuantity();
  });

  test('TC09 - Open Cart From Header Icon', async ({ page }) => {
    const collection = new CollectionPage(page);
    await collection.gotoCollectionDirect();
    await collection.openCartFromHeader();
    await collection.verifyCartOpened();
  });

  test('TC10 - Cart Overlay Appears After Add', async ({ page }) => {
    const collection = new CollectionPage(page);
    await collection.gotoCollectionDirect();
    await collection.addFirstProductToCart();
    await collection.verifyCartOverlay();
  });

});