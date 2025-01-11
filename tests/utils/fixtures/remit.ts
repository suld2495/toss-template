import { Page } from "@playwright/test";

type NumberKeypad = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '0';
type Keypad = NumberKeypad | '취소' | 'arrow';

class RemitFixture {
  constructor(private page: Page) {}

  clickMoney(numbers: NumberKeypad[]) {
    const keypads = [...numbers].map((number) => this.keypad(number));
    
    return Promise.all(keypads.map((keypad) => {
      return keypad.click();
    }));
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

    return this.page.getByText(key);
  }

  submit() {
    return this.page.getByRole('button', { name: '보내기' }).click();
  }
}

export default RemitFixture;