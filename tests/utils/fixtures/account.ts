import { Page } from "@playwright/test";

class AccountFixture {
  constructor(private page: Page) {}

  accountName(name: string) {
    return this.page.locator('.account-name')
      .filter({ hasText: name });
  }

  balance(name: string) {
    return this.accountName(name)
      .locator("+ span");
  }

  accountContainer(name: string) {
    return this.page.locator('.account-container')
      .filter({ has: this.accountName(name) })
  }

  remit(name: string) {
    return this.accountContainer(name)
      .getByRole('link', { name: /송금/ });
  }

  get totalBalance() {
    return this.page.locator('.total-balance');
  }

  get list() {
    return this.page.getByRole('listitem');
  }
}

export default AccountFixture;