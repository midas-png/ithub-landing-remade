import { ReactNode } from 'react';

type THeading = 'h1' | 'h2' | 'h3' | 'h4';
type TVariant = 'primary' | 'secondary' | 'tertiary' | 'quaternary';

export interface IProps {
  heading?: THeading;
  variant?: TVariant;
  children?: ReactNode;
}
