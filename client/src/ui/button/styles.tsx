import styled, { css } from 'styled-components';
import { IProps } from './props';

const variantMap = {
  primary: css`
    background: ${({ theme }) => theme.palette.primary.main};
    color: ${({ theme }) => theme.palette.primary.contrastText};
  `,
  secondary: css`
    background: ${({ theme }) => theme.palette.secondary.main};
    color: ${({ theme }) => theme.palette.secondary.contrastText};
  `,
  tertiary: css`
    background: ${({ theme }) => theme.palette.tertiary.main};
    color: ${({ theme }) => theme.palette.tertiary.contrastText};
  `,
  quaternary: css`
    background: ${({ theme }) => theme.palette.quaternary.main};
    color: ${({ theme }) => theme.palette.quaternary.contrastText};
  `,
};

const sizeMap = {
  small: css`
    padding: ${({ theme }) => theme.paddingSize.small};
  `,
  medium: css`
    padding: ${({ theme }) => theme.paddingSize.medium};
  `,
  large: css`
    padding: ${({ theme }) => theme.paddingSize.large};
  `,
  parent: css`
    height: 100%;
    width: 100%;
  `,
};

const shadowMap = {
  primary: css`
    border: 3px solid ${({ theme }) => theme.palette.common.secondary};
    box-shadow: 5px 5px 0px 0px ${({ theme }) => theme.palette.common.secondary};
  `,
  secondary: css`
    border: 3px solid ${({ theme }) => theme.palette.common.tertiary};
    box-shadow: 5px 5px 0px 0px ${({ theme }) => theme.palette.common.tertiary};
  `,
  tertiary: css`
    border: 3px solid ${({ theme }) => theme.palette.common.quaternary};
    box-shadow: 5px 5px 0px 0px
      ${({ theme }) => theme.palette.common.quaternary};
  `,
};

export const ButtonComponent = styled.button<IProps>`
  font-weight: 800;
  font-size: 15px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  ${({ variant = 'primary' }) => variantMap[variant]};
  ${({ size = 'medium' }) => sizeMap[size]};
  ${({ shadow = 'primary' }) => shadowMap[shadow]};

  &:active {
    transform: scale(0.9);
  }
`;
