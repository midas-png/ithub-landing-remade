import styled from 'styled-components';

export const HeroWrapper = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 1fr 1fr;
  height: calc(100vh - 100px);
`;

export const ImageWrapper = styled.div`
  background: ${({ theme }) => theme.palette.common.main};
  border-left: 1px solid ${({ theme }) => theme.palette.common.tertiary};
`;

export const ContentWrapper = styled.div`
  background: ${({ theme }) => theme.palette.common.secondary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  padding-left: 80px;
  border-right: 1px solid ${({ theme }) => theme.palette.common.tertiary};
`;

export const ContentTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  width: 60%;
`;

export const ContentButtonsWrapper = styled.div`
  display: flex;
  gap: 15px;
`;

export const ImageHero = styled.img`
  object-fit: cover;
  width: 100%;
  height: calc(100vh - 100px);
`;
