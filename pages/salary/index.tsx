import styled from '@emotion/styled';
import router from 'next/router';

import { useStage } from 'components/salary/stage';
import Additional from 'components/salary/additional';
import Income from 'components/salary/income';
import { useSalaryInput } from 'hooks/income';
import { getLocalStorageItem, removeLocalStorageItem, setLocalStorageItem } from 'common/utils';

const SalaryPageStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: min(13.3rem, 12.3148vh);
  margin: 0 auto;
  max-width: min(62.6vw, 121rem);
  overflow-y: hidden;
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

  const onSaveValue = () => {
    dispatch({ type: 'DONE' });

    if (getLocalStorageItem('salary')) {
      removeLocalStorageItem('salary');
    }

    setLocalStorageItem('salary', state);

    router.push('/timer');
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
        <Additional additional={state.additional} onChangeAdditional={onChangeAdditional} onSaveValue={onSaveValue} />
      )}
    </SalaryPageStyle>
  );
}
