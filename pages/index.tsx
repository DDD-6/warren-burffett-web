import type { NextPage } from 'next';
import styled from '@emotion/styled';
import router from 'next/router';
import Image from 'next/image';

import { Section, Button } from 'components';

const HomePageStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  height: inherit;
`;

const Home: NextPage = () => {
  return (
    <HomePageStyle>
      <Section style={{ flex: '72 auto' }}>
        <Image src="/main.webp" width="840" height="420" alt="welcome wesaver" loading="eager" objectFit="contain" />;
      </Section>
      <Section style={{ flex: '23 auto' }}>
        <Button
          onClick={() => router.push('/salary')}
          label="Let's WESAVE"
          className="font-color-0 bg-primary-blue"
          style={{ width: '25rem', height: '7rem' }}
        />
      </Section>
    </HomePageStyle>
  );
};

export default Home;
