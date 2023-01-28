// Utils
import PropTypes from 'prop-types';

// Styles
import { InfoWrap, Poster, InfoBlock } from './MovieInfo.styled';

export const MovieInfo = ({
  movie: { poster, vote, overview, genres, title },
}) => {
  return (
    <InfoWrap>
      <Poster>
        <img src={poster} alt={title} />
      </Poster>
      <InfoBlock>
        <h1>{title}</h1>
        <p>User Score: {vote}</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genres}</p>
      </InfoBlock>
    </InfoWrap>
  );
};

MovieInfo.propTypes = {
  movie: PropTypes.object.isRequired,
};
