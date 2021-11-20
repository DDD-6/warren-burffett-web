import { useState, useCallback } from 'react';

import { P3 } from 'components/paragraph';
import RangeBar from 'components/range-bar';
import { useMonthWages } from 'hooks/income';
import { stringToMoney } from 'common/utils';

export default function Timer() {
  const [hover, setHover] = useState(false);
  const { data: monthWage } = useMonthWages();

  const monthPercent = useCallback(
    () => (
      <>
        <P3>
          {hover ? stringToMoney(monthWage?.currentSalary.toFixed(0) || '0') : `${monthWage?.percentage.toFixed(1)}%`}
        </P3>
        <P3 style={{ visibility: monthWage?.percentage !== 100 ? 'visible' : 'hidden' }}>이번 달</P3>
      </>
    ),
    [monthWage, hover],
  );

  const monthContent = useCallback(
    () => (
      <>
        <P3>이번 달도</P3>
        <P3>잘 버티셨어요</P3>
      </>
    ),
    [],
  );

  return (
    <div
      style={{
        flex: 1,
        border: 0,
        display: 'flex',
        justifyContent: 'flex-end',
        flexDirection: 'column',
        position: 'relative',
        height: '100%',
      }}
    >
      <RangeBar
        type="month"
        contents={monthWage?.percentage === 100 && monthContent()}
        style={{ height: `${monthWage?.percentage || 1}%` }}
      />
      <div
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
        style={{ textAlign: 'center', position: 'absolute', left: '50%', transform: 'translate(-50%, -100%)' }}
      >
        {monthPercent()}
      </div>
    </div>
  );
}
