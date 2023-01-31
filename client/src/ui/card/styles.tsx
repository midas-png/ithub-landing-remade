import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background: ${({ theme }) => theme.palette.common.tertiary};
  height: 300px;
  width: 300px;
  border: 2px solid ${({ theme }) => theme.palette.common.secondary};
  box-shadow: 5px 5px 0px 0px ${({ theme }) => theme.palette.common.secondary};
`;

export const CardImage = styled.img`
  height: 230px;
  width: 230px;
  object-fit: cover;
  border: 2px solid ${({ theme }) => theme.palette.common.secondary};
  background: green;
`;

export const DetailsWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 0 30px;
`;

export const DetailsTitle = styled.span`
  font-size: 18px;
`;
