// Core
import { useState, useEffect } from 'react';

// Utils
import { useSearchParams } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';

// API
import { getMovieByName } from 'services/movieDatabaseAPI';

// Components
import { SearchBox } from 'components/SearchBox';
import { MoviesList } from 'components/MoviesList';
import { Loader } from 'components/Loader';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('name') ?? '';

  useEffect(() => {
    if (!error) return;
    toast.error(error);
  }, [error]);

  useEffect(() => {
    if (movieName === '') return;

    const getMovies = async () => {
      try {
        setLoading(true);
        setError('');
        const data = await getMovieByName(movieName);
        setMovies(data);
        setLoading(false);
        if (data.length < 1)
          setError(
            'Sorry, we didn`t find any movies according to your request.'
          );
      } catch {
        setError('Sorry, something went wrong. Try reloading the page!');
      }
    };

    getMovies();
  }, [movieName]);

  const updateQueryString = name => {
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
  };

  return (
    <main>
      {loading && <Loader />}

      <SearchBox value={movieName} onChange={updateQueryString} />
      {movies && <MoviesList data={movies} />}

      <Toaster position="top-right" />
    </main>
  );
};

export default Movies;
