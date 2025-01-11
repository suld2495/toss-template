import { Page } from "@playwright/test";

class RecentFixture {
  constructor(private page: Page) {}

  bookmarkClick(name: string) {
    return this.list
      .filter({ hasText: name })
      .getByRole('button')
      .click();
  }

  select(name: string) {
    return this.list
      .filter({ hasText: name })
      .click();
  }

  get list() {
    return this.page.locator('.recent').getByRole('listitem');
  }
}

export default RecentFixture;