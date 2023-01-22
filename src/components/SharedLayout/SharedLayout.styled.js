// Core
import { NavLink } from 'react-router-dom';

// Utils
import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  padding: 8px 0;
  margin-bottom: 16px;

  border-bottom: 1px solid #b2b2b2;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px,
    rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;

  > nav {
    display: flex;
    margin-right: 5px;
  }
`;

export const Logo = styled.p`
  font-weight: 700;
  margin: 0;
`;

export const StyledLink = styled(NavLink)`
  padding: 8px 16px;

  border-radius: 4px;

  text-decoration: none;
  font-weight: 500;
  color: inherit;

  &.active {
    color: #ffffff;
    background-color: rgb(251, 109, 58);
  }
`;
