import { FC } from 'react';
import {
  ComponentWrapper,
  HeaderWrapper,
  CardsWrapper,
  CardSlide,
} from './styles';
import { Title, Card } from 'ui';

export const Faculties: FC = () => {
  return (
    <ComponentWrapper>
      <HeaderWrapper>
        <Title variant='secondary'>Специальности</Title>
      </HeaderWrapper>
      <CardsWrapper>
        <CardSlide>
          <Card />
        </CardSlide>
        <CardSlide>
          <Card />
        </CardSlide>
        <CardSlide>
          <Card />
        </CardSlide>
        <CardSlide>
          <Card />
        </CardSlide>
        <CardSlide>
          <Card />
        </CardSlide>
        <CardSlide>
          <Card />
        </CardSlide>
      </CardsWrapper>
    </ComponentWrapper>
  );
};
