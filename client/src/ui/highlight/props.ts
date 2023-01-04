import { ReactNode } from 'react';

type TVariant = 'primary' | 'secondary' | 'tertiary' | 'quaternary';

export interface IProps {
  variant?: TVariant;
  children?: ReactNode;
}
