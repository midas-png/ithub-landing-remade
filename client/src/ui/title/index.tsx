import { FC } from 'react';
import { TitleComponent } from './styles';
import { IProps } from './props';

export const Title: FC<IProps> = ({ heading, variant, children }) => {
  return (
    <TitleComponent heading={heading} variant={variant}>
      {children}
    </TitleComponent>
  );
};
