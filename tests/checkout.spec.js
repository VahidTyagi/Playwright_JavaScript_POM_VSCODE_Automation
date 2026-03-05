import { test, expect } from '@playwright/test';
import { CheckoutPage } from '../pages/CheckoutPage';

test.describe('Checkout Module', () => {

    test('@smoke Verify checkout page opens', async ({ page }) => {

        const checkout = new CheckoutPage(page);

        await checkout.openHomePage();
        await checkout.openProduct();
        await checkout.clickBuyNow();

        await checkout.verifyCheckoutLoaded();
    });


    test('Verify product visible in checkout', async ({ page }) => {

        const checkout = new CheckoutPage(page);

        await checkout.openHomePage();
        await checkout.openProduct();
        await checkout.clickBuyNow();

        await checkout.verifyProductVisible();
    });


    test('Verify mobile number field accepts input', async ({ page }) => {

        const checkout = new CheckoutPage(page);

        await checkout.openHomePage();
        await checkout.openProduct();
        await checkout.clickBuyNow();

        await checkout.enterMobileNumber('9876543210');
    });


    test('Verify user can click continue after entering mobile', async ({ page }) => {

        const checkout = new CheckoutPage(page);

        await checkout.openHomePage();
        await checkout.openProduct();
        await checkout.clickBuyNow();

        await checkout.enterMobileNumber('9876543210');
        await checkout.clickContinue();
    });

});







