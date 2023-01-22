// Core
import { useEffect, useState } from 'react';

// Utils
import { useParams } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';

// API
import { getCastInfo } from 'services/movieDatabaseAPI';

// Components
import { Loader } from 'components/Loader';

// Styles
import { Container, Poster } from './Cast.styled';
import { posterTemplate } from 'services/posterTemplate';

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
        const { cast } = await getCastInfo(movieId);
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
        {cast.map(({ original_name, id, profile_path, character }) => (
          <li key={id}>
            <Poster>
              <img src={posterTemplate(profile_path)} alt={original_name} />
            </Poster>
            <p style={{ fontWeight: 'bold', marginBottom: '5px' }}>
              {original_name}
            </p>
            <p>Character: {character}</p>
          </li>
        ))}
      </Container>

      <Toaster position="top-right" />
    </>
  );
};
export default Cast;
