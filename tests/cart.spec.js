
import { test, expect } from '@playwright/test';
import { CartPage } from '../pages/CartPage';

test.describe('Cart Page Module', () => {

  test.beforeEach(async ({ page }) => {
    const cart = new CartPage(page);
    await cart.gotoHome();
  });

  test('TC01 Verify cart icon visible', async ({ page }) => {
    const cart = new CartPage(page);
    await expect(cart.cartIcon).toBeVisible();
  });

  test('TC02 Verify product can be added to cart', async ({ page }) => {
    const cart = new CartPage(page);
    await cart.addProductToCart();
    await cart.openCart();
    await cart.verifyCartOpen();
  });

  test('TC03 Verify cart drawer opens', async ({ page }) => {
    const cart = new CartPage(page);
    await cart.openCart();
    await cart.verifyCartOpen();
  });

  test('TC04 Verify quantity increase works', async ({ page }) => {
    const cart = new CartPage(page);
    await cart.addProductToCart();
    await cart.openCart();
    await cart.increaseQuantity();
  });

  test('TC05 Verify quantity decrease works', async ({ page }) => {
    const cart = new CartPage(page);
    await cart.addProductToCart();
    await cart.openCart();
    await cart.increaseQuantity();
    await cart.decreaseQuantity();
  });

  test('TC06 Verify remove product from cart', async ({ page }) => {
    const cart = new CartPage(page);
    await cart.addProductToCart();
    await cart.openCart();
    await cart.removeProduct();
  });

  test('TC07 Verify multiple quantity increase', async ({ page }) => {
    const cart = new CartPage(page);
    await cart.addProductToCart();
    await cart.openCart();

    await cart.increaseQuantity();
    await cart.increaseQuantity();
  });

  test('TC08 Verify suggested product can be added', async ({ page }) => {
    const cart = new CartPage(page);
    await cart.openCart();
    await cart.addSuggestedProduct();
  });

  test('TC09 Verify multiple suggested products can be added', async ({ page }) => {
    const cart = new CartPage(page);
    await cart.openCart();
    await cart.addSuggestedProduct(0);
    await cart.addSuggestedProduct(1);
  });

  test('TC10 Verify offers modal opens', async ({ page }) => {
    const cart = new CartPage(page);
    await cart.addProductToCart();
    await cart.openCart();
    await cart.openOffers();
  });

  test('TC11 Verify offers modal closes', async ({ page }) => {
    const cart = new CartPage(page);
    await cart.addProductToCart();
    await cart.openCart();
    await cart.openOffers();
    await cart.closeOffersModal();
  });

  test('TC12 Verify cart supports multiple products', async ({ page }) => {
    const cart = new CartPage(page);

    await cart.addProductToCart();
    await cart.addProductToCart();

    await cart.openCart();
    await cart.verifyCartOpen();
  });

  test('TC13 Verify Buy Now button works', async ({ page }) => {
    const cart = new CartPage(page);

    await cart.addProductToCart();
    await cart.openCart();

    await cart.clickBuyNow();
  });

  test('TC14 Verify checkout iframe opens', async ({ page }) => {
    const cart = new CartPage(page);

    await cart.addProductToCart();
    await cart.openCart();

    await cart.clickBuyNow();
    await cart.verifyCheckoutOpened();
  });

  test('TC15 Verify cart remains accessible after actions', async ({ page }) => {
    const cart = new CartPage(page);

    await cart.addProductToCart();
    await cart.openCart();
    await cart.increaseQuantity();
    await cart.openCart();

    await cart.verifyCartOpen();
  });

});









