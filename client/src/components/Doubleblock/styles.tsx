import styled, { css } from 'styled-components';
import { IProps } from './props';

const contentVariantMap = {
  primary: css`
    background: ${({ theme }) => theme.palette.common.secondary};

    span {
      color: ${({ theme }) => theme.palette.common.tertiary};
    }
  `,
  secondary: css`
    background: ${({ theme }) => theme.palette.common.main};

    span {
      color: ${({ theme }) => theme.palette.common.tertiary};
    }
  `,
};

const imageVariantMap = {
  primary: css`
    background: ${({ theme }) => theme.palette.common.tertiary};

    div {
      background: ${({ theme }) => theme.palette.common.secondary};
    }

    div > img {
      border: 2px solid ${({ theme }) => theme.palette.common.tertiary};
    }

    span {
      color: ${({ theme }) => theme.palette.common.secondary};
    }
  `,
  secondary: css`
    background: ${({ theme }) => theme.palette.common.quaternary};

    div {
      background: ${({ theme }) => theme.palette.common.main};
    }

    div > img {
      border: 2px solid ${({ theme }) => theme.palette.common.secondary};
    }

    span {
      color: ${({ theme }) => theme.palette.common.secondary};
    }
  `,
};

const borderContentReverseMap = {
  true: css`
    border-left: 1px solid ${({ theme }) => theme.palette.common.secondary};
  `,
  false: css`
    border-right: 1px solid ${({ theme }) => theme.palette.common.secondary};
  `,
};

const borderImageReverseMap = {
  true: css`
    border-right: 1px solid ${({ theme }) => theme.palette.common.secondary};
  `,
  false: css`
    border-left: 1px solid ${({ theme }) => theme.palette.common.secondary};
  `,
};

export const BlockWrapper = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 1fr 1fr;
  height: 85vh;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    height: fit-content;
  }
`;

export const ContentWrapper = styled.div<IProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.palette.common.main};
  border-top: 2px solid ${({ theme }) => theme.palette.common.secondary};
  ${({ reverse }) => reverse && 'order: 1;'}
  ${({ reverse }) => borderContentReverseMap[reverse ? 'true' : 'false']};
  ${({ variant = 'primary' }) => contentVariantMap[variant]};

  @media screen and (max-width: 1024px) {
    order: 1;
  }

  @media screen and (max-width: 1024px) {
    padding: 40px 0;
  }
`;

export const InformationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 70%;
`;

export const BlockDescription = styled.span`
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.palette.common.secondary};
`;

export const ButtonWrapper = styled.div`
  width: 70%;
`;

export const ImageWrapper = styled.div<IProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-top: 2px solid ${({ theme }) => theme.palette.common.secondary};

  svg {
    transform: scale(0.7);
  }

  @media screen and (max-width: 1024px) {
    padding: 40px;
  }

  ${({ variant = 'primary' }) => imageVariantMap[variant]};
  ${({ reverse }) => borderImageReverseMap[reverse ? 'true' : 'false']}
`;

export const PictureContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  background: ${({ theme }) => theme.palette.common.main};
  border: 2px solid ${({ theme }) => theme.palette.common.secondary};
  box-shadow: 5px 5px 0px 0px ${({ theme }) => theme.palette.common.secondary};
  height: 60%;
  width: 350px;

  @media screen and (max-width: 1024px) {
    height: 300px;
    width: 300px;
  }
`;

export const ImageSquare = styled.img`
  background: ${({ theme }) => theme.palette.common.secondary};
  border: 2px solid ${({ theme }) => theme.palette.common.secondary};
  height: 250px;
  width: 250px;
  content-fit: cover;
`;

export const StickerWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 250px;
`;

export const StickerContent = styled.div`
  width: fit-content;
  background: ${({ theme }) => theme.palette.common.quaternary};
  box-shadow: 5px 5px 8px 0px rgba(34, 60, 80, 0.2);
  letter-spacing: 1px;
  padding: 5px;
`;
