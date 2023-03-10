// Core
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';

// API
import { getReviewsInfo } from 'services/movieDatabaseAPI';

// Components
import { Loader } from 'components/Loader';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { movieId } = useParams();

  useEffect(() => {
    const getReviews = async () => {
      try {
        setLoading(true);
        setError('');
        const results = await getReviewsInfo(movieId);
        setReviews(results);
        setLoading(false);
      } catch {
        setError('Oops, something went wrong. Please, try again later!');
      }
    };

    getReviews();
  }, [movieId]);

  useEffect(() => {
    if (!error) return;
    toast.error(error);
  }, [error]);

  return (
    <>
      {loading && <Loader />}

      {reviews.length > 0 &&
        reviews.map(({ author, id, content }) => (
          <div key={id}>
            <h3 style={{ fontWeight: 'bold', marginBottom: '5px' }}>
              Author: {author}
            </h3>
            <p>{content}</p>
          </div>
        ))}

      {reviews.length === 0 && (
        <h3 style={{ fontWeight: 'bold', marginBottom: '5px' }}>
          {' '}
          Sorry, no reviews yet
        </h3>
      )}

      <Toaster position="top-right" />
    </>
  );
};

export default Reviews;
