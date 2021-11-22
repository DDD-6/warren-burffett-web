/* eslint-disable no-unused-vars */
import Image from 'next/image';
import { useCallback } from 'react';
import classnames from 'classnames';

import { P2, ClearInput, Section, Button, DayButton } from 'components';
import { SalaryType } from 'hooks/income';
import { stringToMoney } from 'common/utils';

interface IncomeProps {
  onChangePage: () => void;
  onChangeIncome: (income: string) => void;
  onChangeQuitTime: (quitTime: string) => void;
  onChangePayday: (payday: string) => void;
  onChangeStartTime: (startTime: string) => void;
  onChangeWorkday: (workDay: number, options: { isSelected: boolean }) => void;
  state: SalaryType;
}

export default function Income({
  onChangePage,
  onChangeIncome,
  onChangePayday,
  onChangeQuitTime,
  onChangeStartTime,
  onChangeWorkday,
  state,
}: IncomeProps) {
  const onValidateInput = useCallback(() => {
    const isDaySelected = state.workday.length === 0;
    const { income, payday, quitTime, startTime } = state;
    return Object.values({ income, payday, quitTime, startTime }).includes(0) || isDaySelected;
  }, [state]);

  const isDayClicked = (day: number) => {
    return state.workday.includes(day);
  };

  return (
    <>
      <P2>
        매일 (
        <ClearInput
          onChange={e => onChangeStartTime(e.target.value)}
          onBlur={e => {
            e.currentTarget.value = state.startTime.toString();
          }}
          style={{ maxWidth: '10.5rem' }}
          maxLength={2}
          placeholder="00"
        />
        )시 부터 (
        <ClearInput
          onChange={e => onChangeQuitTime(e.target.value)}
          onBlur={e => {
            e.currentTarget.value = state.quitTime.toString();
          }}
          style={{ maxWidth: '10.5rem' }}
          maxLength={2}
          placeholder="00"
        />
        )시까지
      </P2>
      <P2>
        매주 (
        <DayButton isSelected={isDayClicked(1)} onClickDays={onChangeWorkday} day="월" />
        <DayButton isSelected={isDayClicked(2)} onClickDays={onChangeWorkday} day="화" />
        <DayButton isSelected={isDayClicked(3)} onClickDays={onChangeWorkday} day="수" />
        <DayButton isSelected={isDayClicked(4)} onClickDays={onChangeWorkday} day="목" />
        <DayButton isSelected={isDayClicked(5)} onClickDays={onChangeWorkday} day="금" />
        <DayButton isSelected={isDayClicked(6)} onClickDays={onChangeWorkday} day="토" />
        <DayButton isSelected={isDayClicked(0)} onClickDays={onChangeWorkday} day="일" />) 일해서
      </P2>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <P2 style={{ paddingRight: 57 }}>
          매달(
          <ClearInput
            onChange={e => onChangePayday(e.target.value)}
            onBlur={e => {
              e.currentTarget.value = state.payday.toString();
            }}
            style={{ maxWidth: '10.5rem' }}
            maxLength={2}
            placeholder="00"
          />
          )일에
        </P2>
        <Image width="187" height="60" src="/arrow.svg" alt={undefined} loading="lazy" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Image width="136" height="80" src="/won.svg" alt={undefined} loading="lazy" />
        <P2>
          (
          <ClearInput
            onBlur={e => {
              e.currentTarget.value = stringToMoney(state.income.toString());
            }}
            onChange={e => onChangeIncome(e.target.value)}
            size={5}
            maxLength={10}
            placeholder="0,000,000"
          />
          )원 벌어요
        </P2>
      </div>
      <Section style={{ flexBasis: '20rem', alignItems: 'center' }}>
        <Button
          disabled={onValidateInput()}
          onClick={onChangePage}
          label="Next"
          className={classnames('bg-40', 'font-color-0', { 'bg-primary-blue': !onValidateInput() })}
          style={{ width: '25rem', height: '7rem', color: '#000' }}
        />
      </Section>
    </>
  );
}
