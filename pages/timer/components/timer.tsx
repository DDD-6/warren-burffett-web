import { useCallback } from 'react';

import { P3 } from 'components/paragraph';
import RangeBar from 'components/range-bar';
import { useTimer } from 'hooks/timer';

export default function Timer() {
  const { data } = useTimer();

  const timerContent = useCallback(
    () => (
      <>
        <P3>WOW</P3>
        <P3>퇴근하세요</P3>{' '}
      </>
    ),
    [],
  );

  const timer = useCallback(
    () => (
      <>
        <P3>
          {data?.remainingTime.hours?.toString().padStart(2, '0') || '00'}:
          {data?.remainingTime.minutes?.toString().padStart(2, '0') || '00'}:
          {data?.remainingTime.seconds?.toString().padStart(2, '0') || '00'}
        </P3>
        <P3 style={{ visibility: data?.passedTimeToPercentage !== 100 ? 'visible' : 'hidden' }}>
          {data?.passedTimeToPercentage === 0 ? '출근 전' : '퇴근까지'}
        </P3>
      </>
    ),
    [data],
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
      }}
    >
      <RangeBar
        type="off-work"
        contents={data?.passedTimeToPercentage === 100 && timerContent()}
        style={{ height: `${data?.passedTimeToPercentage || 1}%` }}
      />
      <div style={{ textAlign: 'center', position: 'absolute', left: '50%', transform: 'translate(-50%, -100%)' }}>
        {timer()}
      </div>
    </div>
  );
}
