import { Page } from "@playwright/test";

class TabFixture {
  constructor(private page: Page) {}

  move(tabName: '최근' | '계좌' | '연락처') {
    switch (tabName) {
      case '최근':
        return this.recent.click();
      case '계좌':
        return this.account.click();
      case '연락처':
        return this.contact.click();
    }
  }

  get recent() {
    return this.page.getByRole('listitem', { name: '최근' });
  }

  get account() {
    return this.page.getByRole('listitem', { name: '계좌' });
  }

  get contact() {
    return this.page.getByRole('listitem', { name: '최근' });
  }
}

export default TabFixture;