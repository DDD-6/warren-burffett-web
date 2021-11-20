import { useState, useCallback } from 'react';

import { P3 } from 'components/paragraph';
import RangeBar from 'components/range-bar';
import { useDayWages } from 'hooks/income';
import { stringToMoney } from 'common/utils';

export default function Timer() {
  const [hover, setHover] = useState(false);
  const { data: dayWage } = useDayWages();

  const dayPercent = useCallback(
    () => (
      <>
        <P3>{hover ? stringToMoney(dayWage?.currentWage.toFixed(0) || '0') : `${dayWage?.percentage.toFixed(1)}%`}</P3>
        <P3 style={{ visibility: dayWage?.percentage !== 100 ? 'visible' : 'hidden' }}>오늘</P3>
      </>
    ),
    [dayWage, hover],
  );

  const dayContent = useCallback(
    () => (
      <>
        <P3>오늘도</P3>
        <P3>수고 했어요</P3>
      </>
    ),
    [],
  );

  return (
    <div
      style={{
        flex: 1,
        border: '0 1.5px',
        display: 'flex',
        justifyContent: 'flex-end',
        flexDirection: 'column',
        position: 'relative',
      }}
    >
      <RangeBar
        type="today"
        contents={dayWage?.percentage === 100 && dayContent()}
        style={{ height: `${dayWage?.percentage || 1}%` }}
      />
      <div
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
        style={{ textAlign: 'center', position: 'absolute', left: '50%', transform: 'translate(-50%, -100%)' }}
      >
        {dayPercent()}
      </div>
    </div>
  );
}
