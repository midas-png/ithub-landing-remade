import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 80px;
  height: 100px;
  transition: all 0.2s ease-in-out;
  border-bottom: 2px solid ${({ theme }) => theme.palette.common.secondary};
  z-index: 10;
`;

export const NavigationWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
`;

export const LinkComponent = styled(Link)`
  display: inline-block;
  margin-top: 10px;
  color: ${({ theme }) => theme.palette.common.secondary};
  font-weight: 600;

  &:after {
    display: block;
    content: '';
    padding-bottom: 3px;
    border-bottom: solid 3px currentColor;
    transform: scaleX(0);
    transition: transform 0.25s ease-in-out;
  }

  &:hover:after {
    transform: scaleX(1);
  }
`;
