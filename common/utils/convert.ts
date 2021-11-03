export const stringToMoney = (money: string) => {
  return money.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
};
