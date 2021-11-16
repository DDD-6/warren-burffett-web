import {
  lastDayOfMonth,
  isExists,
  intervalToDuration,
  isWithinInterval,
  differenceInSeconds,
  isSameDay,
} from 'date-fns';

// const calcPayday = (date: string): Date => {
//   const [year, month, day] = date.split('-');
//   return isDate(date) ? new Date(+year, +month, +day) : lastDayOfMonth(new Date(+year, +month));
// };

const checkDay = (date: string): Date => {
  const [year, month, day] = date.split('-');

  return isExists(+year, +month, +day) ? new Date(+year, +month, +day) : lastDayOfMonth(new Date(+year, +month));
};

// const calcPayDayDuration = (payday: number) => {
//   const current = new Date();
//   const start = calcPayday(`${current.getFullYear()}-${current.getMonth()}-${payday}`);
//   const last = calcPayday(`${current.getFullYear()}-${current.getMonth() + 1}-${payday}`);

//   return { start, last };
// };

// string type: `{year}-{month}-{day}`
export const calcBusinessDay = (businessDay: number[], { start, end }: { start: string; end: string }) => {
  let workingDay = 1;
  const startDay = checkDay(start);
  const endDay = checkDay(end);

  startDay.setHours(0, 0, 0, 0);
  endDay.setHours(0, 0, 0, 0);

  while (startDay.getTime() < endDay.getTime()) {
    const dayIndex = startDay.getDay();

    if (businessDay.includes(dayIndex)) {
      workingDay++;
    }

    startDay.setDate(startDay.getDate() + 1);
  }

  return workingDay;
};

export const convertDayToStringType = (date: Date) => {
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
};

export const calcPassedDayToSeconds = (passedWorkingDays: number, startTime: number) => {
  const start = new Date();
  start.setHours(startTime, 0, 0, 0);
  const interval = differenceInSeconds(start, new Date());
  const result = passedWorkingDays * 24 * 3600 + interval;

  return result;
};

export const calcPaseedTimeToSeconds = (startTime: number) => {
  const start = new Date();
  start.setHours(startTime, 0, 0, 0);

  const interval = differenceInSeconds(new Date(), start);

  return interval;
};

export const convertDayToSeconds = (day: number) => {
  return day * 24 * 3600;
};

export const convertTimeToSeconds = (hour: number, minutes = 0, seconds = 0) => {
  return hour * 3600 + minutes * 60 + seconds;
};

export const calcWorkingTime = (startTime: number, endTime: number) => {
  if (0 > startTime || 24 < startTime || 0 > endTime || endTime > 24) {
    return 24;
  }

  if (startTime > endTime) {
    return endTime + 12 - startTime;
  }

  return endTime - startTime;
};

export const isWorkingTime = (startTime: number, endTime: number): boolean => {
  const current = new Date();
  const start = new Date();
  start.setHours(startTime, 0, 0, 0);
  const end = new Date();
  end.setHours(endTime, 0, 0, 0);

  return isWithinInterval(current, { start, end });
};

export const isStarting = (businessDay: number[], startTime: number): boolean => {
  const current = new Date();
  const start = new Date();
  start.setHours(startTime, 0, 0, 0);

  if (!businessDay.includes(current.getDay())) {
    return false;
  }

  if (isSameDay(current, start) && current.getHours() > start.getHours()) {
    return true;
  }
  return false;
};

export const calcPassedTime = (startTime: number, endTime: number) => {
  const start = new Date();
  start.setHours(startTime, 0, 0, 0);
  const { hours, minutes, seconds } = intervalToDuration({ start, end: new Date() });
  const workingTimeToSeconds = calcWorkingTime(startTime, endTime) * 3600;

  const passedTime = (hours || 0) * 3600 + (minutes || 0) * 60 + (seconds || 0);

  const result = (passedTime / workingTimeToSeconds) * 100;
  return +result;
};

// export const currentTimeToSecond = (workingDays: number, payday: number) => {
//   const { start, last } = calcPayDayDuration(payday);
//   const { minutes, hours, seconds } = intervalToDuration({ start, end: last });
//   return (seconds || 0) + (minutes || 0) * 60 + (hours || 0) * 3600 + workingDays * 60 ** 3;
// };
