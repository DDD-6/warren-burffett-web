import type { NextPage } from 'next';
import styled from '@emotion/styled';

import { Section } from 'components/Section';

const HomePageStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 18.5rem;
  padding-bottom: 16rem;
  margin: 0 auto;
  /* height: calc(100vh - 72px); */
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
        <button>{"Let's wesave"}</button>
      </Section>
    </HomePageStyle>
  );
};

export default Home;
