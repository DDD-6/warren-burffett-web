import { Reducer, useReducer, useCallback } from 'react';

import { Income } from '../../entities';
import { checkHour, checkMonth, checkWeek } from '../../common/utils/validate';

type Salary = Income & {
  startTime: number;
  quitTime: number;
  workday: number;
  payday: number;
};

type Action =
  | {
      type: 'SET_STARTTIME';
      payload: Salary['startTime'];
    }
  | {
      type: 'SET_QUITTIME';
      payload: Salary['quitTime'];
    }
  | {
      type: 'SET_WORKDAY';
      payload: Salary['workday'];
    }
  | {
      type: 'SET_PAYDAY';
      payload: Salary['payday'];
    }
  | {
      type: 'SET_INCOME';
      payload: Salary['income'];
    }
  | {
      type: 'SET_ADDITIONAL';
      payload?: Salary['additional'];
    };

const reducer = (state: Salary, action: Action): Salary => {
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
  const [state, dispatch] = useReducer<Reducer<Salary, Action>>(reducer, initialState);

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
      if (isNaN(+startTime) || checkHour(+startTime)) {
        return;
      }

      dispatch({ type: 'SET_STARTTIME', payload: +startTime });
    },
    [dispatch],
  );

  const onChangeQuitTime = useCallback(
    (quitTime: string) => {
      if (isNaN(+quitTime) || checkHour(+quitTime)) {
        return;
      }

      dispatch({ type: 'SET_QUITTIME', payload: +quitTime });
    },
    [dispatch],
  );

  const onChangePayday = useCallback(
    (payday: string) => {
      if (isNaN(+payday) || checkMonth(+payday)) {
        return;
      }

      dispatch({ type: 'SET_PAYDAY', payload: +payday });
    },
    [dispatch],
  );

  const onChangeWorkday = useCallback(
    (workday: string) => {
      if (isNaN(+workday) || checkWeek(+workday)) {
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
  const setSalary = (salary: Salary) => {
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
