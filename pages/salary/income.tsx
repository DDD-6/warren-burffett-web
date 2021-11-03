/* eslint-disable no-unused-vars */
import Image from 'next/image';

import { P2, ClearInput, Section, Button } from 'components';

interface IncomeProps {
  onChangePage: () => void;
  onChangeIncome: (income: string) => void;
  onChangeQuitTime: (quitTime: string) => void;
  onChangePayday: (payday: string) => void;
  onChangeStartTime: (startTime: string) => void;
  onChangeWorkday: (workDay: string) => void;
}

export default function Income({
  onChangePage,
  onChangeIncome,
  onChangePayday,
  onChangeQuitTime,
  onChangeStartTime,
  onChangeWorkday,
}: IncomeProps) {
  return (
    <>
      <P2>
        매일 (
        <ClearInput
          onChange={e => onChangeStartTime(e.target.value)}
          style={{ maxWidth: '10.5rem' }}
          maxLength={2}
          placeholder="00"
        />
        ) 시 부터 (
        <ClearInput
          onChange={e => onChangeQuitTime(e.target.value)}
          style={{ maxWidth: '10.5rem' }}
          maxLength={2}
          placeholder="00"
        />
        ) 시 까지
        <br /> 매주 (
        <ClearInput
          onChange={e => onChangeWorkday(e.target.value)}
          style={{ maxWidth: '5.4rem' }}
          maxLength={1}
          placeholder="0"
        />
        )일 동안 일해서
      </P2>
      <P2>
        매달(
        <ClearInput
          onChange={e => onChangePayday(e.target.value)}
          style={{ maxWidth: '10.5rem' }}
          maxLength={2}
          placeholder="00"
        />
        )일에
      </P2>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Image width="136" height="80" src="/won.svg" alt={undefined} loading="lazy" />
        <P2>
          (
          <ClearInput onChange={e => onChangeIncome(e.target.value)} size={5} maxLength={10} placeholder="0,000,000" />
          )원 벌어요
        </P2>
      </div>
      <Section style={{ flexBasis: '20rem', alignItems: 'center' }}>
        <Button
          onClick={onChangePage}
          label="Next"
          className="bg-40"
          style={{ width: '25rem', height: '7rem', color: '#000' }}
        />
      </Section>
    </>
  );
}
