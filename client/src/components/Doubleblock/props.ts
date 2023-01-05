import { ReactNode } from 'react';

type Variant = 'primary' | 'secondary';

export interface IProps {
  variant?: Variant;
  title?: ReactNode;
  buttonText?: ReactNode;
  image?: ReactNode;
  marker?: ReactNode;
  reverse?: boolean;
  children?: ReactNode;
  onClick?: () => void;
}
