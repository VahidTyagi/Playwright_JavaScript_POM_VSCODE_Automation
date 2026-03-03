import { test, expect } from '@playwright/test';
import { ProductPage } from '../pages/ProductPage';

test.describe('Product Page Module', () => {

  let product;

  test.beforeEach(async ({ page }) => {
    product = new ProductPage(page);
    await product.navigate();
  });

  test('TC01 - Verify product page loads', async () => {
    await expect(product.productTitle).toBeVisible();
  });

  test('TC02 - Verify product price visible', async () => {
    await expect(product.productPrice).toBeVisible();
  });

  test('TC03 - Verify discount badge visible', async () => {
    await expect(product.discountBadge).toBeVisible();
  });

  test('TC04 - Verify image thumbnails clickable', async () => {
    await product.clickThumbnails();
  });

  test('TC05 - Verify quantity increase works', async () => {
    await product.increaseQuantity(2);
  });

  test('TC06 - Verify quantity decrease works', async () => {
    await product.increaseQuantity(2);
    await product.decreaseQuantity();
  });

  test('TC07 - Verify Add to Cart button enabled', async () => {
    await expect(product.addToCartBtn).toBeEnabled();
  });

  test('TC08 - Verify Add to Cart opens cart drawer', async () => {
    await product.addToCart();
    await expect(product.cartDrawerHeading).toBeVisible();
  });

  test('TC09 - Verify remove item from cart', async () => {
    await product.addToCart();
    await product.removeItemBtn.first().click();
  });

  test('TC10 - Verify View All Offers modal opens', async () => {
    await product.openOffers();
    await expect(product.closeOffersModal).toBeVisible();
  });

  test('TC11 - Verify offers modal closes', async () => {
    await product.openOffers();
    await product.closeOffers();
  });

  test('TC12 - Verify Frequently Bought Together section visible', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /Frequently Bought Together/i }))
      .toBeVisible();
  });

  test('TC13 - Verify Buy Now opens checkout iframe', async ({ page }) => {
    await product.openBuyNow();
    await expect(page.locator('iframe[title="Checkout window"]')).toBeVisible();
  });

  test('TC14 - Verify Reviews widget loads', async () => {
    await expect(product.reviewWidget).toBeVisible();
  });

  test('TC15 - Verify product URL contains product handle', async ({ page }) => {
    await expect(page).toHaveURL(/dynamite/i);
  });

});