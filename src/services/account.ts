import { db } from ".";

type AccountType = 'KB' | 'KAKAO';

interface Account {
  id: number;
  name: string;
  balance: number;
  bookmark: boolean;
  type: AccountType
}

export interface Recent {
  id: number;
  name: string;
  account: string;
  type: string;
  bookmark: boolean;
}

export type RecentResponse = Omit<Recent, 'bookmark'> & { bookmark: string; }


export interface Contact {
  id: number;
  name: string;
  phone: string;
  account: string;
  type: string;
}

export const fetchAccounts = (): Account[] => {
  return db.prepare<[], Account>("SELECT * FROM account").all();
};

export const remitAccount = (id: number, money: number) => {
  db.prepare("UPDATE account SET balance = balance - ? WHERE id = ?").run(money, id);
}

export const fetchRecentList = (): Recent[] => {
  return db.prepare<[], RecentResponse>("SELECT * FROM recent ORDER BY bookmark DESC, id DESC")
    .all()
    .map((recent) => ({
      ...recent,
      bookmark: recent.bookmark === 'true'
    }));
}

export const addRecent = (contactId: number) => {
  db.prepare("DELETE FROM recent WHERE contact_id = ?").run(contactId);

  db.prepare("INSERT INTO recent (contact_id, bookmark) VALUES (?, ?)")
    .run(contactId, "false");
}

export const fetchContactList = (): Contact[] => {
  return db.prepare<[], Contact>("SELECT * FROM contact").all();
}