import { FC } from 'react';
import { MainWrapper } from './styles';
import { Hero } from './Hero';
import { Marquee } from 'ui';

export const Main: FC = () => {
  return (
    <MainWrapper>
      <Hero />
      <Marquee>ПРИХОДИ НА ДЕНЬ ОТКРЫТЫХ ДВЕРЕЙ В ITHUB COLLEGE</Marquee>
    </MainWrapper>
  );
};
