import { FC } from 'react';
import { CardWrapper, CardImage, DetailsWrapper, DetailsTitle } from './styles';
import { IProps } from './props';
import { Images } from 'assets';

export const Card: FC<IProps> = () => {
  return (
    <CardWrapper>
      <CardImage src={Images.Programmer} />
      <DetailsWrapper>
        <DetailsTitle>Программирование</DetailsTitle>
      </DetailsWrapper>
    </CardWrapper>
  );
};
