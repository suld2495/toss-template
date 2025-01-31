// eslint-disable-next-line @typescript-eslint/no-require-imports
const sql = require('better-sqlite3');
const db = sql('toss.db');

const createTable = () => {
  db.prepare(
    `CREATE TABLE IF NOT EXISTS account (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      type TEXT,
      bookmark TEXT,
      balance INTEGER
    );`
  ).run();
  
  db.prepare(
    `CREATE TABLE IF NOT EXISTS contact (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      phone TEXT,
      account TEXT,
      type TEXT
    );`
  ).run();

  db.prepare(
    `CREATE TABLE IF NOT EXISTS recent (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      contact_id INTEGER,
      bookmark TEXT
    );`
  ).run();
}

createTable();

const dummyAccount = [
  { name: 'KB국민은행 계좌', type: 'KB', bookmark: 'true', balance: 33_283 },
  { name: '카카오뱅크 계좌', type: 'KAKAO', bookmark: 'false', balance: 85_000 },
  { name: 'KB종합통장-보통예금', type: 'KB', bookmark: 'false', balance: 1_000_000 },
  { name: '직장인우대통장-보통예금', type: 'KB', bookmark: 'false', balance: 0 },
]

const dummyContact = [
  { name: "오빠", phone: "010-2312-4921", account: "KB 국민 798-823552-93-695", type: "KB" },
  { name: "친구1", phone: "010-1239-8372", account: "KAKAO 뱅크 3333-93-0740142", type: "KAKAO" },
  { name: "엄마", phone: "010-1298-8439", account: "KAKAO 뱅크 3333-92-6888790", type: "KAKAO" },
  { name: "언니", phone: "010-0937-1271", account: "KB 국민 955-344744-13-606", type: "KB" },
  { name: "아빠", phone: "010-2801-0921", account: "KAKAO 뱅크 3333-49-7338087", type: "KAKAO" }
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

  const stmt2 = db.prepare(`
      INSERT INTO contact VALUES (
         null,
         @name,
         @phone,
         @account,
         @type
      )
   `);

  for (const contact of dummyContact) {
    stmt2.run(contact);
  }
}

initData();