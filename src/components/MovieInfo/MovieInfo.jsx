// Utils
import PropTypes from 'prop-types';
import { posterTemplate } from 'services/posterTemplate';

// Styles
import { InfoWrap, Poster, InfoBlock } from './MovieInfo.styled';

export const MovieInfo = ({
  movie: { poster_path, original_title, vote_average, overview, genres, title },
}) => {
  return (
    <InfoWrap>
      <Poster>
        <img src={posterTemplate(poster_path)} alt={title ?? original_title} />
      </Poster>
      <InfoBlock>
        <h1>{title ?? original_title}</h1>
        <p>
          User Score: {vote_average ? vote_average.toFixed(1) : 'No score yet'}
        </p>
        <h2>Overview</h2>
        <p>{overview ? overview : "Sorry, we don't have an overview yet"}</p>
        <h3>Genres</h3>
        <p>
          {genres
            ? genres.map(genre => genre.name).join(', ')
            : "Genres weren't added yet"}
        </p>
      </InfoBlock>
    </InfoWrap>
  );
};

MovieInfo.propTypes = {
  movie: PropTypes.object.isRequired,
};
