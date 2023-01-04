import styled, { css, keyframes } from 'styled-components';
import { IProps } from './props';

const variantMap = {
  primary: css`
    background: ${({ theme }) => theme.palette.common.secondary};
    border: 2px solid ${({ theme }) => theme.palette.common.tertiary};
  `,
  secondary: css`
    background: ${({ theme }) => theme.palette.common.tertiary};
  `,
  tertiary: css`
    background: ${({ theme }) => theme.palette.common.main};
  `,
  quaternary: css`
    background: ${({ theme }) => theme.palette.common.quaternary};
  `,
};

const marquee = keyframes`
  0% { left: 0; }
  100% { left: -100%; }
`;

export const MarqueeWrapper = styled.div<IProps>`
  display: flex;
  align-items: center;
  height: 100px;
  overflow: hidden;
  position: relative;

  ${({ variant = 'primary' }) => variantMap[variant]};
  border-left: none;
  border-right: none;
`;

export const MarqueeTextWrapper = styled.div`
  display: block;
  width: 200%;

  position: absolute;
  overflow: hidden;

  animation: ${marquee} 10s linear infinite;
`;

export const MarqueeText = styled.span<IProps>`
  float: left;
  width: 50%;
  color: ${({ variant = 'primary', theme }) =>
    variant === 'secondary'
      ? theme.palette.common.secondary
      : theme.palette.common.tertiary};
  font-size: 50px;
`;
