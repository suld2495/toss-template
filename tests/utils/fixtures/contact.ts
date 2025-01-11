import { Page } from "@playwright/test";

class ContactFixture {
  constructor(private page: Page) {}

  clearSearch() {
    return this.page.locator('input[type="search"]').clear();
  }

  search(keyword: string) {
    return this.page.locator('input[type="search"]').fill(keyword);

  }

  select(name: string) {
    return this.list
      .filter({ hasText: name })
      .click();
  }

  searchList(keyword: string) {
    return this.page.getByRole('listitem', { name: new RegExp(keyword) });
  }
  
  get list() {
    return this.page.locator('.contact').getByRole('listitem');
  }
}

export default ContactFixture;