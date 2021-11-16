import { useQuery } from 'react-query';
import { intervalToDuration } from 'date-fns';

import { SalaryType } from 'hooks/income';
import { calcPassedTime, isWorkingTime } from 'common/utils/date';
import { getLocalStorageItem } from 'common/utils';

const calcOffWorkTime = () => {
  const salary = <SalaryType>getLocalStorageItem('salary');
  if (!salary) {
    return { passedTimeToPercentage: 0, remainingTime: { hours: 0, minutes: 0, seconds: 0 } };
  }

  const isWorking = isWorkingTime(salary.startTime, salary.quitTime);

  if (!isWorking) {
    return { passedTimeToPercentage: 100, remainingTime: { hours: 0, minutes: 0, seconds: 0 } };
  }

  const result = calcPassedTime(salary.startTime, salary.quitTime);
  const end = new Date();
  end.setHours(salary.quitTime, 0, 0, 0);
  const remainingTime = intervalToDuration({ start: new Date(), end });

  return { passedTimeToPercentage: result, remainingTime };
};

export const useTimer = () => {
  return useQuery('timer', () => calcOffWorkTime(), {
    refetchInterval: 1000,
  });
};
