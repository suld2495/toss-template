import { expect, test } from "../utils/fixtures";
import { NumberKeypad } from "../utils/fixtures/remit";

test.describe("송금", () => {

  test.beforeEach(async ({ page, account, accounts }) => {
    await page.goto("http://localhost:3000");
    await account.remit(accounts[0]).click();
    await page.waitForURL('**/remit');
  });

  test.describe("금액 입력", () => {
    Array.from({ length: 10 }, (_, i) => i)
      .forEach((number) => {
        test('0 ~ 9 버튼을 입력하면 금액이 입력된다. ' + number, async ({ remit }) => {
          await remit.keypad(String(number) as NumberKeypad).click();
  
          await expect(remit.money()).toHaveText(`${String(number)} 원`);
        });
      });
  })

  test('0만 입력 되면 0으로 표기된다.', async ({ remit }) => {
    await remit.clickMoney(['0', '0', '0', '0', '0']);

    await expect(remit.money()).toHaveText(/^0 원$/);
  });

  test('취소버튼을 누르면 금액이 초기화된다.', async ({ remit }) => {
    await remit.clickMoney(['1', '2', '3', '4', '5']);

    await remit.keypad('취소').click();

    await expect(remit.money()).toHaveText(/^0 원$/);
  });


  test('뒤로가기 버튼을 누르면 가장 마지막 입력 된 값이 없어진다.', async ({ remit }) => {
    const money = ['1', '2', '3', '4', '5'] as NumberKeypad[];
    await remit.clickMoney(money);

    await remit.keypad('arrow').click();

    await expect(remit.money(), '금액 1,234원 확인').toHaveText(/^1,234 원$/);

    await remit.keypad('arrow').click();

    await expect(remit.money(), '금액 123원 확인').toHaveText(/^123 원$/);
  });

  test('보내기 버튼을 누르면 상대입력 페이지로 이동한다.', async ({ page, remit }) => {
    await remit.submit();

    await page.waitForURL('**/recent');

    await expect(page.url()).toContain('/remit/recent');
  });
});