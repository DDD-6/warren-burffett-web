import { HTMLProps } from 'react';

export const Section = (props: HTMLProps<HTMLDivElement>) => (
  <section css={{ display: 'flex', justifyContent: 'center' }} {...props} />
);
