// Core
import { Link, useLocation } from 'react-router-dom';

// Utils
import PropTypes from 'prop-types';

// Styles
import { Container, CardWrapper, MovieName } from './MoviesList.styled';

export const MoviesList = ({ data }) => {
  const location = useLocation();

  return (
    <Container>
      {data.map(({ id, title, poster }) => (
        <CardWrapper key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <img src={poster} alt={title} />
            <MovieName>{title}</MovieName>
          </Link>
        </CardWrapper>
      ))}
    </Container>
  );
};

MoviesList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
