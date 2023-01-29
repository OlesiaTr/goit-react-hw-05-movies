// Core
import { useState, useEffect } from 'react';
import { toast, Toaster } from 'react-hot-toast';

// API
import { getTrendingMovies } from 'services/movieDatabaseAPI';

// Components
import { Loader } from 'components/Loader';
import { MoviesList } from 'components/MoviesList';

const Home = () => {
  const [trending, setTrending] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const getMovies = async () => {
      try {
        setLoading(true);
        setError('');
        const results = await getTrendingMovies();
        console.log(results);
        setTrending(results);
        setLoading(false);
      } catch {
        setError('Oops, something went wrong. Please, try again later!');
      }
    };

    getMovies();
  }, []);

  useEffect(() => {
    if (!error) return;
    toast.error(error);
  }, [error]);

  return (
    <main>
      <h1 style={{ textAlign: 'center', marginBottom: '10px' }}>
        Trending movies today
      </h1>

      {loading && <Loader />}

      {trending && <MoviesList data={trending} />}

      <Toaster position="top-right" />
    </main>
  );
};

export default Home;
