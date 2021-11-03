import type { NextPage } from 'next';
import styled from '@emotion/styled';
import router from 'next/router';
import Image from 'next/image';

import { Section } from 'components/Section';
import { Button } from 'components/button';

const HomePageStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 18.5rem;
  padding-bottom: 16rem;
  margin: 0 auto;
`;

const Home: NextPage = () => {
  return (
    <HomePageStyle>
      <Section>
        <Image src="/main.webp" width="840" height="420" alt="welcome wesaver" loading="eager" />;
      </Section>
      <Section style={{ paddingTop: '16.8rem' }}>
        <Button
          onClick={() => router.push('/salary')}
          label="Let's WESAVE"
          style={{ width: '25rem', height: '7rem', color: '#000', backgroundColor: '#dbeb27' }}
        />
      </Section>
    </HomePageStyle>
  );
};

export default Home;
