import styled from '@emotion/styled';

import Income from './income';
import Additional from './additional';
import { useStage } from './stage';

import { useSalaryInput, useSalaryStorage, SalaryType } from 'hooks/income';

const SalaryPageStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 11.2rem;
  margin: 0 auto;
  max-width: 1048px;
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
  const { setSalary } = useSalaryStorage();

  const onChangePage = () => {
    // dispatch({ type: 'Next_Page' });
  };

  const onSaveValue = (salary: SalaryType) => {
    dispatch({ type: 'DONE' });
    setSalary(salary);
  };

  return (
    <SalaryPageStyle>
      {stage === 1 ? (
        <Income
          onChangeIncome={onChangeIncome}
          onChangeQuitTime={onChangeQuitTime}
          onChangePayday={onChangePayday}
          onChangeStartTime={onChangeStartTime}
          onChangePage={onChangePage}
          onChangeWorkday={onChangeWorkday}
        />
      ) : (
        <Additional onChangeAdditional={onChangeAdditional} onSaveValue={() => onSaveValue(state)} />
      )}
    </SalaryPageStyle>
  );
}
