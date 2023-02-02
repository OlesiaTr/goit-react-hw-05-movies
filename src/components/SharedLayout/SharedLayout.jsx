// Core
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

// Styles
import { Layout, Header, Logo, StyledLink } from './SharedLayout.styled';

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

      <main>
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </Layout>
  );
};
