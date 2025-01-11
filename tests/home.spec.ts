import { expect, test } from "./utils/fixtures";

test.describe("계좌", () => {
  test('전체 계좌 리스트를 확인할 수 있다.', async ({ page, account, accounts }) => {
    await page.goto("http://localhost:3000");
    await expect(account.list).toHaveCount(accounts.length);
  });
    
  test('전체 계좌 잔액 총액을 확인할 수 있다.', async ({ page, account, balances }) => {
    const expectedTotalBalance = Object.values(balances)
      .reduce((total, balance) => total + balance).toLocaleString();

    await page.goto("http://localhost:3000");
    await expect(account.totalBalance).toHaveText(`${expectedTotalBalance} 원`)
  });

  test('계좌 별 잔액을 확인할 수 있다.', async ({ page, account, balances }) => {
    await page.goto("http://localhost:3000");

    await Promise.all(
      Object.entries(balances).map(
        ([name, value]) => {
          const expectedBalance = `${value.toLocaleString()} 원`;
          return expect(account.balance(name), `${name} 계좌에 대한 잔액은 ${expectedBalance}`).toHaveText(expectedBalance)
        }
      )
    );
  });

  test('송금 버튼 클릭 시 해당 계좌의 송금 페이지로 이동한다.', async ({ page, account, accounts }) => {
    await page.goto("http://localhost:3000");
    await account.remit(accounts[0]).click();

    await page.waitForURL('**/remit');
  });
})