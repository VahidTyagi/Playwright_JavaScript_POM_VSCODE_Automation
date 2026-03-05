import { expect } from '@playwright/test';

export class FooterPage {

  constructor(page) {
    this.page = page;

    // Footer policy links
    this.privacyPolicy = page.getByRole('link', { name: 'Privacy Policy' });
    this.refundPolicy = page.getByRole('link', { name: 'Refund policy' });
    this.shippingPolicy = page.getByRole('link', { name: 'Shipping policy' });

    // Company links
    this.becomePartner = page.getByRole('link', { name: 'Become a Partner' });
    this.authorizedSeller = page.getByRole('link', { name: 'Authorized Online Sellers' });
    this.aboutUs = page.getByRole('link', { name: 'About us', exact: true });

    // Contact section
    this.supportEmail = page.getByRole('link', { name: 'support@wellversed.in' });

    // Social media
    this.facebook = page.getByRole('link', { name: 'Find us on Facebook' });
    this.instagram = page.getByRole('link', { name: 'Find us on Instagram' });
  }

  async openHomePage() {
    await this.page.goto('https://store.wellversed.in/');
  }

  async scrollToFooter() {
    await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  }

  async clickPrivacyPolicy() {
    await this.privacyPolicy.click();
  }

  async clickRefundPolicy() {
    await this.refundPolicy.click();
  }

  async clickShippingPolicy() {
    await this.shippingPolicy.click();
  }

  async clickBecomePartner() {
    await this.becomePartner.click();
  }

  async clickAuthorizedSeller() {
    await this.authorizedSeller.click();
  }

  async clickAboutUs() {
    await this.aboutUs.click();
  }

  async clickSupportEmail() {
    await this.supportEmail.click();
  }

  async clickFacebook() {
    const popup = this.page.waitForEvent('popup');
    await this.facebook.click();
    return popup;
  }

  async clickInstagram() {
    const popup = this.page.waitForEvent('popup');
    await this.instagram.click();
    return popup;
  }

}




