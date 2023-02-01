import styled from 'styled-components';

export const BlockWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  padding: 100px 0;
  background: ${({ theme }) => theme.palette.common.tertiary};
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  max-width: 1000px;

  @media screen and (max-width: 1024px) {
    * {
      text-align: center;
    }
  }
`;

export const ImageWrapper = styled.div`
  position: absolute;
  right: 5%;

  svg {
    height: 300px;
    width: fit-content;
  }

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const BlockDescription = styled.span`
  font-weight: 600;
  font-size: 20px;
  text-align: center;
  width: 60%;

  @media screen and (max-width: 1024px) {
    width: 90%;
  }
`;
