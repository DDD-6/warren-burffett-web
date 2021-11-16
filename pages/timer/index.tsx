import { useState, useCallback } from 'react';

import { P3 } from 'components/paragraph';
import RangeBar from 'components/range-bar';
import { useDayWages, useMonthWages } from 'hooks/income';
import { useTimer } from 'hooks/timer';
import { stringToMoney } from 'common/utils';

export default function Timer() {
  const [hover, setHover] = useState({
    month: false,
    day: false,
  });
  const { data } = useTimer();
  const { data: dayWage } = useDayWages();
  const { data: monthWage } = useMonthWages();

  const monthPercent = useCallback(
    () => (
      <>
        <P3>
          {hover.month
            ? stringToMoney(monthWage?.currentSalary.toFixed(0) || '0')
            : `${monthWage?.percentage.toFixed(1)}%`}
        </P3>
        <P3 style={{ visibility: monthWage?.percentage !== 100 ? 'visible' : 'hidden' }}>이번 달</P3>
      </>
    ),
    [monthWage, hover.month],
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

  const dayPercent = useCallback(
    () => (
      <>
        <P3>
          {hover.day ? stringToMoney(dayWage?.currentWage.toFixed(0) || '0') : `${dayWage?.percentage.toFixed(1)}%`}
        </P3>
        <P3 style={{ visibility: dayWage?.percentage !== 100 ? 'visible' : 'hidden' }}>오늘</P3>
      </>
    ),
    [dayWage, hover.day],
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
    <div style={{ display: 'flex', height: '100%' }}>
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
          type="month"
          contents={monthWage?.percentage === 100 && monthContent()}
          style={{ height: `${monthWage?.percentage || 1}%` }}
        />
        <div
          onMouseOver={() => setHover(origin => ({ ...origin, month: true }))}
          onMouseOut={() => setHover(origin => ({ ...origin, month: false }))}
          style={{ textAlign: 'center', position: 'absolute', left: '50%', transform: 'translate(-50%, -100%)' }}
        >
          {monthPercent()}
        </div>
      </div>
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
          onMouseOver={() => setHover(origin => ({ ...origin, day: true }))}
          onMouseOut={() => setHover(origin => ({ ...origin, day: false }))}
          style={{ textAlign: 'center', position: 'absolute', left: '50%', transform: 'translate(-50%, -100%)' }}
        >
          {dayPercent()}
        </div>
      </div>
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
    </div>
  );
}
