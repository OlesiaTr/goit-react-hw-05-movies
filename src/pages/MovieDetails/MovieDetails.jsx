// Core
import { useState, useEffect, Suspense } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';

// API
import { getPrimaryInfo } from 'services/movieDatabaseAPI';

// Components
import { Loader } from 'components/Loader';
import { BackLink } from 'components/BackLink';
import { MovieInfo } from 'components/MovieInfo';

// Styles
import { SubPageWrapper, StyledLink } from './MovieDetails.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    if (!error) return;
    toast.error(error);
  }, [error]);

  useEffect(() => {
    const getMovie = async () => {
      try {
        setLoading(true);
        setError('');
        const data = await getPrimaryInfo(movieId);
        setMovie(data);
        setLoading(false);
      } catch {
        setError("Sorry, the movie wasn't found😖");
      }
    };

    getMovie();
  }, [movieId]);

  return (
    <main>
      {loading && <Loader />}

      {!error && !loading && (
        <BackLink to={backLinkHref}>Back to movies list</BackLink>
      )}

      {!error && !loading && movie && <MovieInfo movie={movie} />}

      {!error && !loading && (
        <SubPageWrapper>
          <h2>Additional Information:</h2>
          <ul>
            <li>
              <StyledLink to="cast" state={{ from: backLinkHref }}>
                Learn more about the cast
              </StyledLink>
            </li>
            <li>
              <StyledLink to="reviews" state={{ from: backLinkHref }}>
                Go through the reviews
              </StyledLink>
            </li>
          </ul>
          <Suspense fallback={<div>Loading subpage...</div>}>
            <Outlet />
          </Suspense>
        </SubPageWrapper>
      )}

      <Toaster position="top-right" />
    </main>
  );
};

export default MovieDetails;
