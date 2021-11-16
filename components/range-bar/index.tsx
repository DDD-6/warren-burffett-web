import { ReactNode, CSSProperties } from 'react';
import classnames from 'classnames';

interface RangeBarProps {
  contents: ReactNode;
  type: 'today' | 'month' | 'off-work';
  style?: CSSProperties;
  onMouseOver?: () => void;
  onMouseOut?: () => void;
}

export default function RangeBar({ contents, type, style, onMouseOut, onMouseOver }: RangeBarProps) {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', ...style }}
      className={classnames(
        { 'bg-primary-blue': type === 'month' },
        { 'bg-secondary-green': type === 'today' },
        { 'bg-primary-purple': type === 'off-work' },
      )}
      onMouseOut={onMouseOut}
      onMouseOver={onMouseOver}
    >
      <div style={{ textAlign: 'center', transform: 'translate(0%, -85%)' }}>{contents}</div>
    </div>
  );
}
