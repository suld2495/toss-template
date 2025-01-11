import { test as base } from '@playwright/test';

interface Data {
  accounts: string[];
  balances: Record<string, number>;
  contacts: Record<string, string>;
}

const balances = {
  'KB국민은행 계좌': 33_283,
  '카카오뱅크 계좌': 85_000,
  'KB종합통장-보통예금': 0,
  '직장인우대통장-보통예금': 0,
};

const contacts = {
  '김철수': '010-1234-5678',
  '홍길동': '010-9876-5432',
}

export const data = base.extend<Data>({
  accounts: [Object.keys(balances), { option: true }],
  balances: [balances, { option: true }],
  contacts: [contacts, { option: true }],
});