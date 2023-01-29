// Core
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';

// API
import { getCastInfo } from 'services/movieDatabaseAPI';

// Components
import { Loader } from 'components/Loader';

// Styles
import { Container, Poster } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { movieId } = useParams();

  useEffect(() => {
    if (!error) return;
    toast.error(error);
  }, [error]);

  useEffect(() => {
    const getCast = async () => {
      try {
        setLoading(true);
        setError('');
        const cast = await getCastInfo(movieId);
        setCast(cast);
        setLoading(false);
      } catch {
        setError('Oops, something went wrong. Please, try reloading the page!');
      }
    };

    getCast();
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      <Container>
        {cast.map(({ name, id, poster, character }) => (
          <li key={id}>
            <Poster>
              <img src={poster} alt={name} />
            </Poster>
            <p style={{ fontWeight: 'bold', marginBottom: '5px' }}>{name}</p>
            <p>Character: {character}</p>
          </li>
        ))}
      </Container>

      <Toaster position="top-right" />
    </>
  );
};
export default Cast;
