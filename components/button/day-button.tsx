/* eslint-disable no-unused-vars */
import { css } from '@emotion/react';
import { ButtonHTMLAttributes } from 'react';

const dayBuuttonCss = css`
  background-color: #fff;
  border: 0px;
  padding: 0;
  font-size: min(5vw, 9.6rem);
`;

type Day = '월' | '화' | '수' | '목' | '금' | '토' | '일';

const selectDay = (day: Day) => {
  switch (day) {
    case '월':
      return 1;
    case '화':
      return 2;
    case '수':
      return 3;
    case '목':
      return 4;
    case '금':
      return 5;
    case '토':
      return 6;
    case '일':
      return 0;
    default:
      return 1;
  }
};

interface IconButtonProps {
  day: Day;
  isSelected: boolean;
  onClickDays: (day: number, options: { isSelected: boolean }) => void;
}

export default function DayButton({
  day,
  isSelected,
  onClickDays,
  ...props
}: IconButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      onClick={_ => onClickDays(selectDay(day), { isSelected: isSelected })}
      className={isSelected ? 'font-color-100' : 'font-color-20'}
      css={dayBuuttonCss}
      {...props}
    >
      {day}
    </button>
  );
}
