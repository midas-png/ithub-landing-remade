import { FC } from 'react';
import { SingleBlock } from '../Singleblock';
import { Doubleblock } from '../Doubleblock';
import { MainWrapper } from './styles';
import { Hero } from './Hero';
// import { Faculties } from './Faculties';
import { Images } from 'assets';
import { Marquee } from 'ui';

export const Main: FC = () => {
  return (
    <MainWrapper>
      <Hero />
      <Marquee>ПРИХОДИ НА ДЕНЬ ОТКРЫТЫХ ДВЕРЕЙ В ITHUB COLLEGE</Marquee>
      <SingleBlock
        title='День открытых дверей'
        buttonText='Записаться'
        image={<Images.Welcoming />}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </SingleBlock>
      <Doubleblock
        variant='secondary'
        title='iHub School'
        buttonText='Записаться'
        image={<Images.Welcoming />}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Doubleblock>
      <Doubleblock
        title='Мастер классы'
        buttonText='Подробнее'
        image={<Images.Welcoming />}
        reverse={true}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Doubleblock>
      {/* <Faculties /> */}
    </MainWrapper>
  );
};
