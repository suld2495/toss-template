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

export const connectDB = (init: string = '') => {
  const fetchAccounts = async (): Promise<Account[]> => {
    const result = await pool.query<Account>(`SELECT * FROM ${init}account ORDER BY id`);
    return result.rows;
  };
  
  const remitAccount = async (id: number, money: number): Promise<void> => {
    await pool.query(`UPDATE ${init}account SET balance = balance - $1 WHERE id = $2`, [money, id]);
  };
  
  const fetchRecentList = async (): Promise<Recent[]> => {
    const result = await pool.query<RecentResponse>(
      `SELECT r.*, c.name, c.account, c.type FROM ${init}RECENT R JOIN ${init}CONTACT C ON R.CONTACT_ID = C.ID ORDER BY bookmark DESC, id DESC`
    );
    return result.rows.map((recent) => ({
      ...recent,
      bookmark: recent.bookmark === 'true'
    }));
  };
  
  const addRecent = async (contactId: number): Promise<void> => {
    if (!contactId) return;

    await pool.query(`DELETE FROM ${init}recent WHERE contact_id = $1`, [contactId]);
    await pool.query(
      `INSERT INTO ${init}recent (contact_id, bookmark) VALUES ($1, $2)`,
      [contactId, 'false']
    );
  };
  
  const fetchContactList = async (): Promise<Contact[]> => {
    const result = await pool.query<Contact>(`SELECT * FROM ${init}contact`);
    return result.rows;
  };

  const toggleBookmark = async (id: number): Promise<void> => {
    await pool.query(
      `UPDATE ${init}recent
        SET bookmark = CASE 
          WHEN bookmark = 'true' THEN 'false'
          WHEN bookmark = 'false' THEN 'true'
          ELSE 'false'
        END
        WHERE contact_id = $1`,
      [id]
    );
  }

  return {
    fetchAccounts,
    remitAccount,
    fetchRecentList,
    addRecent,
    fetchContactList,
    toggleBookmark
  }
}

export const db = connectDB();
export const innderDB = connectDB('m_');
export const typeDB = (type: string) => connectDB(type);