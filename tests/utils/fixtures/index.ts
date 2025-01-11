/* eslint-disable react-hooks/rules-of-hooks */
import { mergeTests, test as base, expect as baseExpect } from '@playwright/test';
import { data } from './data';
import AccountFixture from './account';
import ContactFixture from './contact';
import RecentFixture from './recent';
import RemitFixture from './remit';
import TabFixture from './tab';

interface Fixtures {
  account: AccountFixture;
  contact: ContactFixture;
  recent: RecentFixture;
  remit: RemitFixture;
  tab: TabFixture;
}

const fixtures = base.extend<Fixtures>({
  account: async ({ page }, use) => {
    const account = new AccountFixture(page);
    await use(account);
  },

  contact: async ({ page }, use) => {
    const contact = new ContactFixture(page);
    await use(contact);
  },

  recent: async ({ page }, use) => {
    const recent = new RecentFixture(page);
    await use(recent);
  },

  remit: async ({ page }, use) => {
    const remit = new RemitFixture(page);
    await use(remit);
  },

  tab: async ({ page }, use) => {
    const tab = new TabFixture(page);
    await use(tab);
  },
});

export const expect = baseExpect;
export const test = mergeTests(fixtures, data);