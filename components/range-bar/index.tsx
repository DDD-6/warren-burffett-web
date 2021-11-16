import { ReactNode, CSSProperties } from 'react';
import classnames from 'classnames';

interface RangeBarProps {
  content: ReactNode;
  type: 'today' | 'month' | 'off-work';
  style?: CSSProperties;
}

export default function RangeBar({ content, type, style }: RangeBarProps) {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', ...style }}
      className={classnames(
        { 'bg-primary-blue': type === 'month' },
        { 'bg-secondary-green': type === 'today' },
        { 'bg-primary-purple': type === 'off-work' },
      )}
    >
      <div style={{ textAlign: 'center', transform: 'translate(0%, -85%)' }}>{content}</div>
    </div>
  );
}
