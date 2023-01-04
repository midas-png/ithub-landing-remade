import styled from 'styled-components';

export const BlockWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  padding: 100px 0;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  max-width: 1000px;
`;

export const ImageWrapper = styled.div`
  position: absolute;
  right: 5%;

  svg {
    height: 300px;
    width: fit-content;
  }
`;

export const BlockDescription = styled.span`
  font-weight: 600;
  font-size: 20px;
  text-align: center;
  width: 60%;
`;
