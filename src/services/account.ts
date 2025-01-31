import { pool } from ".";

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

export const fetchAccounts = async (): Promise<Account[]> => {
  const result = await pool.query<Account>('SELECT * FROM account ORDER BY id');
  return result.rows;
};

export const remitAccount = async (id: number, money: number): Promise<void> => {
  await pool.query('UPDATE account SET balance = balance - $1 WHERE id = $2', [money, id]);
};

export const fetchRecentList = async (): Promise<Recent[]> => {
  const result = await pool.query<RecentResponse>(
    'SELECT * FROM recent ORDER BY bookmark DESC, id DESC'
  );
  return result.rows.map((recent) => ({
    ...recent,
    bookmark: recent.bookmark === 'true'
  }));
};

export const addRecent = async (contactId: number): Promise<void> => {
  await pool.query('DELETE FROM recent WHERE contact_id = $1', [contactId]);
  await pool.query(
    'INSERT INTO recent (contact_id, bookmark) VALUES ($1, $2)',
    [contactId, 'false']
  );
};

export const fetchContactList = async (): Promise<Contact[]> => {
  const result = await pool.query<Contact>('SELECT * FROM contact');
  return result.rows;
};