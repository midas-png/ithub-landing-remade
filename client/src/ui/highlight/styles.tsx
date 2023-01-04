import styled, { css } from 'styled-components';
import { IProps } from './props';

const variantMap = {
  primary: css`
    background: ${({ theme }) =>
      `linear-gradient(120deg, ${theme.palette.common.main} 0%, ${theme.palette.common.main} 100%)`};
  `,
  secondary: css`
    background: ${({ theme }) =>
      `linear-gradient(120deg, ${theme.palette.common.secondary} 0%, ${theme.palette.common.secondary} 100%)`};
  `,
  tertiary: css`
    background: ${({ theme }) =>
      `linear-gradient(120deg, ${theme.palette.common.tertiary} 0%, ${theme.palette.common.tertiary} 100%)`};
  `,
  quaternary: css`
    background: ${({ theme }) =>
      `linear-gradient(120deg, ${theme.palette.common.quaternary} 0%, ${theme.palette.common.quaternary} 100%)`};
  `,
};

export const HighlightComponent = styled.span<IProps>`
  ${({ variant = 'primary' }) => variantMap[variant]};
  background-repeat: no-repeat;
  background-size: 100% 50%;
  background-position: 0 90%;
`;
