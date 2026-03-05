
// // pages/BasePage.js

// class BasePage {
//   constructor(page) {
//     this.page = page;
//   }

//   async navigate(path = '') {
//     await this.page.goto(path);
//   }

//   async getTitle() {
//     return await this.page.title();
//   }

// //  async waitForPageLoad() {
// //   await this.page.waitForLoadState('domcontentloaded');
// // }
// async waitForHomeReady() {
//   await this.page.getByRole('link', { name: 'Wellversed' }).waitFor();
// }
// }

// module.exports = BasePage;



export class BasePage {
  constructor(page) {
    this.page = page;
  }

  async navigate(url) {
    await this.page.goto(url);
  }

  async waitForPageLoad() {
    await this.page.waitForLoadState('networkidle');
  }

  async getPageTitle() {
    return await this.page.title();
  }

  async getCurrentUrl() {
    return this.page.url();
  }

  async scrollToBottom() {
    await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  }

  async scrollToTop() {
    await this.page.evaluate(() => window.scrollTo(0, 0));
  }

  async takeScreenshot(name) {
    await this.page.screenshot({ path: `test-results/${name}.png` });
  }
}


