import styled from 'styled-components';

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 80px;
  width: 100%;
  background: ${({ theme }) => theme.palette.common.secondary};
`;

export const NavigationWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, fit-content(100%));
  grid-template-rows: repeat(auto-fit, fit-content(100%));
  margin: 0 auto 0 auto;
  gap: 100px;
`;

export const NavigationColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  span:first-child {
    margin-bottom: 15px;
  }
`;

export const NavigationColumnDescription = styled.span`
  color: ${({ theme }) => theme.palette.common.tertiary};
`;

export const SocialLinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SocialMediaWrapper = styled.div`
  display: flex;
  gap: 15px;

  svg {
    height: 50px;
    width: 50px;
    fill: #fff;
  }
`;

export const RegistrationWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const RegistrationDescription = styled.div`
  color: ${({ theme }) => theme.palette.common.tertiary};
  text-align: center;
`;
