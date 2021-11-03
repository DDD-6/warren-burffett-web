/* eslint-disable no-unused-vars */
import { useState } from 'react';

import { P2, ClearInput, Section, Button, CheckButton } from 'components';

interface AdditionalProps {
  onChangeAdditional: (additional: string) => void;
  onSaveValue: () => void;
}

export default function Additional({ onChangeAdditional, onSaveValue }: AdditionalProps) {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <P2>추가수입이 있으신가요?</P2>
      <br />
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <P2>아니요(</P2>
        <CheckButton isChecked={toggle} onClick={() => setToggle(t => !t)} />
        <P2>)</P2>
      </div>
      <P2>
        네,(
        <ClearInput onChange={e => onChangeAdditional(e.target.value)} size={5} minLength={9} placeholder="0,000,000" />
        )원 더 벌어요
      </P2>
      <Section style={{ flexBasis: '20rem', alignItems: 'center' }}>
        <Button
          onChange={onSaveValue}
          label="Done"
          className="bg-40"
          style={{ width: '25rem', height: '7rem', color: '#000' }}
        />
      </Section>
    </>
  );
}
