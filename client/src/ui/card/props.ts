import { ReactNode } from 'react';

export interface IProps {
  image?: ReactNode;
  title?: ReactNode;
  buttonText?: ReactNode;
  marker?: ReactNode;
  children?: ReactNode;
  onClick?: () => void;
}
