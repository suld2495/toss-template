// eslint-disable-next-line @typescript-eslint/no-require-imports
const sql = require('better-sqlite3');
const db = sql('toss.db');

db.prepare(
  `CREATE TABLE IF NOT EXISTS account (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    type TEXT,
    bookmark TEXT,
    balance INTEGER
  );`
).run();

const dummyAccount = [
  { name: 'KB국민은행 계좌', type: 'KB', bookmark: 'true', balance: 33_283 },
  { name: '카카오뱅크 계좌', type: 'KAKAO', bookmark: 'false', balance: 85_000 },
  { name: 'KB종합통장-보통예금', type: 'KB', bookmark: 'false', balance: 1_000_000 },
  { name: '직장인우대통장-보통예금', type: 'KB', bookmark: 'false', balance: 0 },
]

async function initData() {
  const stmt = db.prepare(`
      INSERT INTO account VALUES (
         null,
         @name,
         @type,
         @bookmark,
         @balance
      )
   `);

  for (const account of dummyAccount) {
    stmt.run(account);
  }
}

initData();