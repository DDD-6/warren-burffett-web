import { Reducer, useReducer, useCallback } from 'react';
import { useQuery } from 'react-query';
import { isSameDay, setDate, setMonth } from 'date-fns';

import { Income } from '../../entities';

import {
  calcBusinessDay,
  calcPaseedTimeToSeconds,
  calcPassedDayToSeconds,
  calcWorkingTime,
  convertDayToSeconds,
  convertDayToStringType,
  convertTimeToSeconds,
  getLocalStorageItem,
  checkHour,
  checkMonth,
} from 'common/utils';

export type SalaryType = Income & {
  startTime: number;
  quitTime: number;
  workday: number[];
  payday: number;
};

type Action =
  | {
      type: 'SET_STARTTIME';
      payload: SalaryType['startTime'];
    }
  | {
      type: 'SET_QUITTIME';
      payload: SalaryType['quitTime'];
    }
  | {
      type: 'SET_WORKDAY';
      payload: number;
    }
  | {
      type: 'REMOVE_WORKDAY';
      payload: number;
    }
  | {
      type: 'SET_PAYDAY';
      payload: SalaryType['payday'];
    }
  | {
      type: 'SET_INCOME';
      payload: SalaryType['income'];
    }
  | {
      type: 'SET_ADDITIONAL';
      payload?: SalaryType['additional'];
    }
  | {
      type: 'SET_DAY';
    }
  | {
      type: 'SET_TIME';
      payload?: SalaryType['additional'];
    };

const reducer = (state: SalaryType, action: Action): SalaryType => {
  switch (action.type) {
    case 'SET_ADDITIONAL': {
      return {
        ...state,
        additional: action.payload,
      };
    }
    case 'SET_INCOME': {
      return {
        ...state,
        income: action.payload,
      };
    }
    case 'SET_PAYDAY': {
      return {
        ...state,
        payday: action.payload,
      };
    }
    case 'SET_QUITTIME': {
      return {
        ...state,
        quitTime: action.payload,
      };
    }
    case 'SET_STARTTIME': {
      return {
        ...state,
        startTime: action.payload,
      };
    }
    case 'SET_WORKDAY': {
      return {
        ...state,
        workday: [...state.workday, action.payload],
      };
    }
    case 'REMOVE_WORKDAY': {
      return {
        ...state,
        workday: state.workday.filter(item => item !== action.payload),
      };
    }
    default: {
      return state;
    }
  }
};

const initialState = {
  startTime: 0,
  quitTime: 0,
  workday: [],
  payday: 0,
  income: 0,
};

export const useSalaryInput = () => {
  const [state, dispatch] = useReducer<Reducer<SalaryType, Action>>(reducer, initialState);

  const onChangeAdditional = useCallback(
    (additional: string) => {
      if (isNaN(+additional)) {
        return;
      }

      dispatch({ type: 'SET_ADDITIONAL', payload: +additional });
    },
    [dispatch],
  );

  const onChangeStartTime = useCallback(
    (startTime: string) => {
      if (isNaN(+startTime) || !checkHour(+startTime)) {
        dispatch({ type: 'SET_STARTTIME', payload: 24 });
        return;
      }

      dispatch({ type: 'SET_STARTTIME', payload: +startTime });
    },
    [dispatch],
  );

  const onChangeQuitTime = useCallback(
    (quitTime: string) => {
      if (isNaN(+quitTime) || !checkHour(+quitTime)) {
        dispatch({ type: 'SET_QUITTIME', payload: 24 });
        return;
      }

      if (+quitTime - state.startTime < 0) {
        dispatch({ type: 'SET_QUITTIME', payload: +quitTime + 12 > 24 ? 24 : +quitTime + 12 });
        return;
      }

      dispatch({ type: 'SET_QUITTIME', payload: +quitTime });
    },
    [dispatch, state.startTime],
  );

  const onChangePayday = useCallback(
    (payday: string) => {
      if (isNaN(+payday) || !checkMonth(+payday)) {
        dispatch({ type: 'SET_PAYDAY', payload: 31 });
        return;
      }

      dispatch({ type: 'SET_PAYDAY', payload: +payday });
    },
    [dispatch],
  );

  const onChangeWorkday = useCallback(
    (workday: number, { isSelected }: { isSelected: boolean }) => {
      if (isSelected) {
        dispatch({ type: 'REMOVE_WORKDAY', payload: workday });
        return;
      }
      dispatch({ type: 'SET_WORKDAY', payload: workday });
    },
    [dispatch],
  );

  const onChangeIncome = useCallback(
    (income: string) => {
      if (isNaN(+income)) {
        return;
      }

      dispatch({ type: 'SET_INCOME', payload: +income });
    },
    [dispatch],
  );

  return {
    onChangeAdditional,
    onChangeIncome,
    onChangePayday,
    onChangeQuitTime,
    onChangeStartTime,
    onChangeWorkday,
    state,
  };
};

const convertPassedTimeToPercentage = () => {
  const salary = <SalaryType>getLocalStorageItem('salary');

  if (!salary) {
    return 0;
  }

  const passedTime = calcPaseedTimeToSeconds(salary.startTime);

  const workingTime = calcWorkingTime(salary.startTime, salary.quitTime);
  const workingTimeToSeconds = convertTimeToSeconds(workingTime);
  const percentage = (passedTime / workingTimeToSeconds) * 100;
  const result = percentage < 0 ? 100 : percentage;

  return result >= 100 ? 100 : result;
};

const convertPassedDayToPercentage = () => {
  const salary = <SalaryType>getLocalStorageItem('salary');

  if (!salary) {
    return 0;
  }
  let passedWorkingDay = 0;
  const current = new Date();
  const startDay = setDate(current, salary.payday);
  const startMonth = salary.payday > current.getDate() ? current.getMonth() - 1 : current.getMonth();

  if (!isSameDay(startDay, current)) {
    passedWorkingDay = calcBusinessDay(salary.workday, {
      start: convertDayToStringType(setMonth(setDate(new Date(), salary.payday), startMonth)),
      end: convertDayToStringType(new Date()),
    });
  }

  const passedTime = calcPassedDayToSeconds(passedWorkingDay, salary.startTime);
  const workingDays = calcBusinessDay(salary.workday, {
    start: convertDayToStringType(setMonth(setDate(new Date(), salary.payday), startMonth)),
    end: convertDayToStringType(setMonth(setDate(new Date(), salary.payday), startMonth + 1)),
  });
  const result = (passedTime / convertDayToSeconds(workingDays)) * 100;

  return result >= 100 ? 100 : result;
};

const calcCurrentSalary = () => {
  const salary = <SalaryType>getLocalStorageItem('salary');

  if (!salary) {
    return { currentSalary: 0, percentage: 0 };
  }
  const percentage = convertPassedDayToPercentage();
  const result = (salary.income + (salary?.additional || 0)) * (percentage / 100);

  return { currentSalary: result, percentage };
};

const calcCurrentWages = () => {
  const salary = <SalaryType>getLocalStorageItem('salary');

  if (!salary) {
    return { currentWage: 0, percentage: 0 };
  }

  const current = new Date();

  if (!salary.workday.includes(current.getDay())) {
    return { currentWage: 0, percentage: 0 };
  }

  const percentage = convertPassedTimeToPercentage();
  const result = salary.income * (percentage / 100);

  return { currentWage: result, percentage };
};

export const useMonthWages = () => {
  return useQuery('month-wage', () => calcCurrentSalary(), {
    refetchInterval: 60000,
  });
};

export const useDayWages = () => {
  return useQuery('day-wage', () => calcCurrentWages(), {
    refetchInterval: 60000,
  });
};
