import styled, { css } from 'styled-components';
import { IProps } from './props';

const headingMap = {
  h1: css`
    font-size: 42px;
    font-style: normal;
    line-height: 48px;
  `,
  h2: css`
    font-size: 28px;
    font-style: normal;
    line-height: 36px;
  `,
  h3: css`
    font-size: 24px;
    font-style: normal;
    line-height: 32px;
  `,
  h4: css`
    font-size: 20px;
    font-style: normal;
    line-height: 28px;
    letter-spacing: 0.05em;
  `,
};

const variantMap = {
  primary: css`
    color: ${({ theme }) => theme.palette.common.secondary};
  `,
  secondary: css`
    color: ${({ theme }) => theme.palette.common.tertiary};
  `,
  tertiary: css`
    color: ${({ theme }) => theme.palette.common.tertiary};
    -webkit-text-stroke: 1px ${({ theme }) => theme.palette.common.tertiary};
    -webkit-text-fill-color: transparent;
  `,
  quaternary: css`
    color: ${({ theme }) => theme.palette.common.secondary};
    -webkit-text-stroke: 1px ${({ theme }) => theme.palette.common.secondary};
    -webkit-text-fill-color: transparent;
  `,
};

export const TitleComponent = styled.span<IProps>`
  font-weight: 800;
  transition: all 0.3s ease-in-out;
  ${({ heading = 'h1' }) => headingMap[heading]};
  ${({ variant = 'primary' }) => variantMap[variant]};

  &:active {
    transform: scale(0.9);
  }
`;
