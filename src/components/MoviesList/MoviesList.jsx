// Core
import { Link, useLocation } from 'react-router-dom';

// Utils
import PropTypes from 'prop-types';
import { posterTemplate } from 'services/posterTemplate';

// Styles
import { Container, CardWrapper, MovieName } from './MoviesList.styled';

export const MoviesList = ({ data }) => {
  const location = useLocation();

  return (
    <Container>
      {data.map(({ id, original_title, poster_path, name }) => (
        <CardWrapper key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <img
              src={posterTemplate(poster_path)}
              alt={original_title ?? name}
            />
            <MovieName>{original_title ?? name}</MovieName>
          </Link>
        </CardWrapper>
      ))}
    </Container>
  );
};

MoviesList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
