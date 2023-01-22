// Core
import { Link } from 'react-router-dom';

// Utils
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;

  padding: 8px 0;

  color: inherit;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;

  :hover {
    color: rgb(251, 109, 58);
  }
`;
