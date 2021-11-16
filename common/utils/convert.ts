import { currentTimeToSecond } from './date';

export const stringToMoney = (money: string) => {
  return money.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
};

export const convertToSecondWages = (
  salary: number,
  { workingDays, workingTime }: { workingDays: number; workingTime: number },
): number => {
  return +(salary / workingDays / workingTime / 3600).toFixed(1);
};

export const convertCurrentWages = (
  secondWages: number,
  { workingDays, payDay }: { workingDays: number; payDay: number },
): number => {
  return +(secondWages * currentTimeToSecond(workingDays, payDay)).toFixed(1);
};

export const calcCurrentMonthpercentage = (
  salary: number,
  working: { workingDays: number; workingTime: number; payDay: number },
): number => {
  const secondWages = convertToSecondWages(salary, working);
  return +((convertCurrentWages(secondWages, working) / salary) * 100).toFixed(1);
};
