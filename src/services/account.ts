import { db } from ".";

type AccountType = 'KB' | 'KAKAO';

interface Account {
  id: number;
  name: string;
  balance: number;
  bookmark: boolean;
  type: AccountType
}

export const fetchAccounts = (): Account[] => {
  return db.prepare<[], Account>("SELECT * FROM account").all();
};

export const remitAccount = (id: number, money: number) => {
  db.prepare("UPDATE account SET balance = balance - ? WHERE id = ?").run(money, id);
}