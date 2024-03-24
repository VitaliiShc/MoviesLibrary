import css from './MovieReviews.module.css';

import { useParams } from 'react-router-dom';
import { useEffect, useState, lazy } from 'react';

import { getMovieReviews } from '../../apis/TMDB-api';
import Loader from '../Loader/Loader';
const ErrorMessage = lazy(() => import('../ErrorMessage/ErrorMessage'));

export const MovieReviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        setIsLoading(true);
        setError(false);
        const data = await getMovieReviews(movieId);
        if (data.length === 0) {
          setError(true && 'noReviews');
          return;
        }
        setReviews(data);
      } catch (error) {
        console.log('error: ', error);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieReviews();
  }, [movieId]);

  return (
    <div>
      {isLoading && <Loader />}
      {error && <ErrorMessage alert={error} />}
      {!error && (
        <ul className={css.list}>
          {reviews.map((review) => (
            <li key={review.id} className={css.item}>
              <div className={css.itemHeader}>
                <p className={css.author}>{review.author}</p>
                <p>{review.updated_at}</p>
              </div>
              <p className={css.content}>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieReviews;
