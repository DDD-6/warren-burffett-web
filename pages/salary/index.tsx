import styled from '@emotion/styled';

import Income from './income';
import Additional from './additional';
import { useStage } from './stage';

import { useSalaryInput, SalaryType } from 'hooks/income';
import { getLocalStorageItem, removeLocalStorageItem, setLocalStorageItem } from 'common/utils';

const SalaryPageStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 11.2rem;
  margin: 0 auto;
  max-width: 110.6rem;
`;

export default function Salary() {
  const { stage, dispatch } = useStage();
  const {
    onChangeAdditional,
    onChangeIncome,
    onChangePayday,
    onChangeQuitTime,
    onChangeStartTime,
    onChangeWorkday,
    state,
  } = useSalaryInput();
  // const { setSalary } = useSalaryStorage();

  const onChangePage = () => {
    dispatch({ type: 'Next_Page' });
  };

  const onSaveValue = (salary: SalaryType) => {
    dispatch({ type: 'DONE' });

    if (getLocalStorageItem('salary')) {
      removeLocalStorageItem('salary');
    }

    setLocalStorageItem('salary', salary);
  };

  return (
    <SalaryPageStyle>
      {stage === 1 ? (
        <Income
          state={{
            income: state.income,
            payday: state.payday,
            quitTime: state.quitTime,
            startTime: state.startTime,
            workday: state.workday,
          }}
          onChangeIncome={onChangeIncome}
          onChangeQuitTime={onChangeQuitTime}
          onChangePayday={onChangePayday}
          onChangeStartTime={onChangeStartTime}
          onChangePage={onChangePage}
          onChangeWorkday={onChangeWorkday}
        />
      ) : (
        <Additional
          additional={state.additional}
          onChangeAdditional={onChangeAdditional}
          onSaveValue={() => onSaveValue(state)}
        />
      )}
    </SalaryPageStyle>
  );
}
