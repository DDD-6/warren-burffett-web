import type { NextPage } from 'next';
import styled from '@emotion/styled';
import router from 'next/router';

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
        <picture>
          <source srcSet="/main.avif" type="image/avif" />
          <source srcSet="/main.webp" type="image/webp" />
          <img src="/main.jpg" width="840" height="420" alt="welcome wesaver" loading="lazy" />;
        </picture>
      </Section>
      <Section style={{ paddingTop: '16.8rem' }}>
        <Button
          onClick={() => router.push('/wesave')}
          label="Let's WESAVE"
          style={{ width: '25rem', height: '7rem', color: '#000', backgroundColor: '#dbeb27' }}
        />
      </Section>
    </HomePageStyle>
  );
};

export default Home;
