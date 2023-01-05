import { FC } from 'react';
import {
  HeroWrapper,
  ContentWrapper,
  ImageWrapper,
  ContentTitleWrapper,
  ContentButtonsWrapper,
  ImageHero,
} from './styles';
import { Images } from 'assets';
import { Button, Title, Highlight } from 'ui';

export const Hero: FC = () => {
  return (
    <HeroWrapper>
      <ContentWrapper>
        <ContentTitleWrapper>
          <Title variant='secondary'>
            IThub <Highlight>College</Highlight>
          </Title>
          <Title heading='h4' variant='secondary'>
            Международный колледж информационных технологий
          </Title>
        </ContentTitleWrapper>
        <ContentButtonsWrapper>
          <Button shadow='secondary'>Поступить в IThub</Button>
          <Button variant='quaternary' shadow='secondary'>
            Пройти тест
          </Button>
        </ContentButtonsWrapper>
      </ContentWrapper>
      <ImageWrapper>
        <ImageHero src={Images.HeroImage} />
      </ImageWrapper>
    </HeroWrapper>
  );
};
