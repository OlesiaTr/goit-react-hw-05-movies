// Core
import { Suspense } from 'react';

// Utils
import { Outlet } from 'react-router-dom';

// Styles
import { Header, Logo, StyledLink } from './SharedLayout.styled';
import { Layout } from 'components/Layout';
import { GlobalStyle } from 'components/GlobalStyle';

export const SharedLayout = () => {
  return (
    <Layout>
      <Header>
        <Logo>
          <span role="img" aria-label="movie icon">
            🎞️
          </span>{' '}
          Movie Munch
        </Logo>
        <nav>
          <StyledLink to="/" end>
            Home
          </StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </Header>

      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>

      <GlobalStyle />
    </Layout>
  );
};
