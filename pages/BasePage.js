
// pages/BasePage.js

class BasePage {
  constructor(page) {
    this.page = page;
  }

  async navigate(path = '') {
    await this.page.goto(path);
  }

  async getTitle() {
    return await this.page.title();
  }

//  async waitForPageLoad() {
//   await this.page.waitForLoadState('domcontentloaded');
// }
async waitForHomeReady() {
  await this.page.getByRole('link', { name: 'Wellversed' }).waitFor();
}
}

module.exports = BasePage;






