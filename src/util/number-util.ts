export const moneyUtil = (money: number) => {
  const DIVIDER_NAME = ['', '만', '억', '조'];
  const DIVIDER = 10000;
  const list = [];

  while (money > 0) {
    list.push(money % DIVIDER);
    money = Math.floor(money / DIVIDER);
  }

  return list.map((value, index) => {
    return value ? `${value}${DIVIDER_NAME[index]}` : '';
  }).reverse().join(' ');
};