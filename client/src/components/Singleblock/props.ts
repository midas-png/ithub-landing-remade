import { ReactNode } from 'react';

export interface IProps {
  title?: ReactNode;
  buttonText?: ReactNode;
  image?: ReactNode;
  children?: ReactNode;
  onClick?: () => void;
}
