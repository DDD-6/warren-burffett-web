import { Reducer, useReducer, useCallback } from 'react';

import { Income } from '../../entities';
import { checkHour, checkMonth, checkWeek } from '../../common/utils';

export type SalaryType = Income & {
  startTime: number;
  quitTime: number;
  workday: number;
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
      payload: SalaryType['workday'];
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
        workday: action.payload,
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
  workday: 0,
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
      if (isNaN(+quitTime) || !checkHour(+quitTime) || +quitTime - state.startTime < 0) {
        dispatch({ type: 'SET_QUITTIME', payload: 24 });
        return;
      }

      dispatch({ type: 'SET_QUITTIME', payload: +quitTime });
    },
    [dispatch, state.startTime],
  );

  const onChangePayday = useCallback(
    (payday: string) => {
      if (isNaN(+payday) || !checkMonth(+payday)) {
        dispatch({ type: 'SET_PAYDAY', payload: 0 });
        return;
      }

      dispatch({ type: 'SET_PAYDAY', payload: +payday });
    },
    [dispatch],
  );

  const onChangeWorkday = useCallback(
    (workday: string) => {
      if (isNaN(+workday) || !checkWeek(+workday)) {
        dispatch({ type: 'SET_WORKDAY', payload: 0 });
        return;
      }

      dispatch({ type: 'SET_WORKDAY', payload: +workday });
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

export const useSalaryStorage = () => {
  const setSalary = (salary: SalaryType) => {
    const salaryTemp = JSON.stringify(salary);
    localStorage.setItem('salary', salaryTemp);
  };

  const getSalary = () => {
    const salaryTemp = localStorage.getItem('salary');

    if (!salaryTemp) {
      return initialState;
    }

    const salary = JSON.parse(salaryTemp);

    return salary;
  };

  return { setSalary, getSalary };
};
