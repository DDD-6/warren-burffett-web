import { P3 } from '@components/paragraph';
import RangeBar from '@components/range-bar';
import { useDayWages, useMonthWages } from 'hooks/income';
import { useTimer } from 'hooks/timer';

export default function Timer() {
  const { data } = useTimer();
  const { data: dayWage } = useDayWages();
  const { data: monthWage } = useMonthWages();

  const monthPercent = () => (
    <>
      <P3>{monthWage?.percentage.toFixed(1)}%</P3>
      <P3 style={{ visibility: monthWage?.percentage !== 100 ? 'visible' : 'hidden' }}>이번 달</P3>
    </>
  );

  const monthContent = () => (
    <>
      <P3>이번 달도</P3>
      <P3>잘 버티셨어요</P3>
    </>
  );

  const dayPercent = () => (
    <>
      <P3>{dayWage?.percentage.toFixed(1)}%</P3>
      <P3 style={{ visibility: dayWage?.percentage !== 100 ? 'visible' : 'hidden' }}>오늘</P3>
    </>
  );

  const dayContent = () => (
    <>
      <P3>오늘도</P3>
      <P3>수고 했어요</P3>
    </>
  );

  const timerContent = () => (
    <>
      <P3>WOW</P3>
      <P3>퇴근하세요</P3>{' '}
    </>
  );

  const timer = () => (
    <>
      <P3>
        {data?.remainingTime.hours?.toString().padStart(2, '0') || '00'}:
        {data?.remainingTime.minutes?.toString().padStart(2, '0') || '00'}:
        {data?.remainingTime.seconds?.toString().padStart(2, '0') || '00'}
      </P3>
      <P3 style={{ visibility: data?.passedTimeToPercentage !== 100 ? 'visible' : 'hidden' }}>퇴근까지</P3>
    </>
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
          content={monthWage?.percentage === 100 && monthContent()}
          style={{ height: `${monthWage?.percentage || 1}%` }}
        />
        <div style={{ textAlign: 'center', position: 'absolute', left: '50%', transform: 'translate(-50%, -100%)' }}>
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
          content={dayWage?.percentage === 100 && dayContent()}
          style={{ height: `${dayWage?.percentage || 1}%` }}
        />
        <div style={{ textAlign: 'center', position: 'absolute', left: '50%', transform: 'translate(-50%, -100%)' }}>
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
          content={data?.passedTimeToPercentage === 100 && timerContent()}
          style={{ height: `${data?.passedTimeToPercentage || 1}%` }}
        />
        <div style={{ textAlign: 'center', position: 'absolute', left: '50%', transform: 'translate(-50%, -100%)' }}>
          {timer()}
        </div>
      </div>
    </div>
  );
}
