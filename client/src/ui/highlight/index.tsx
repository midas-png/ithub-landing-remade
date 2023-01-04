import { FC } from 'react';
import { HighlightComponent } from './styles';
import { IProps } from './props';

export const Highlight: FC<IProps> = ({ variant, children }) => {
  return <HighlightComponent variant={variant}>{children}</HighlightComponent>;
};
