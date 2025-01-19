import { Page } from "@playwright/test";

export type NumberKeypad = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '0';
type Keypad = NumberKeypad | '취소' | 'arrow';

class RemitFixture {
  constructor(private page: Page) {}

  clickMoney(numbers: NumberKeypad[]) {
    const keypads = [...numbers].map((number) => this.keypad(number));
    
    return keypads.reduce(async (promise, keypad) => {
      await promise;
      return keypad.click()
    }, Promise.resolve());
  }

  money() {
    return this.page.locator('.money');
  }

  smallMoney() {
    return this.page.locator('.small-money');
  }

  keypad(key: Keypad) {
    if (key === 'arrow') {
      return this.page.getByRole('button', { name: '←' });
    }

    return this.page.getByRole('button', { name: key });
  }

  submit() {
    return this.page.getByRole('link', { name: '보내기' }).click();
  }
}

export default RemitFixture;