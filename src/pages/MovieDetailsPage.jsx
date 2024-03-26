import css from './Pages.module.css';

import { useParams, useLocation } from 'react-router-dom';
import { useRef, useEffect, useState, lazy } from 'react';

import { getMovieDetails } from '../apis/TMDB-api';
import BackLink from '../components/BackLink/BackLink';
import Loader from '../components/Loader/Loader';
import MovieDetails from '../components/MovieDetails/MovieDetails';
const ErrorMessage = lazy(() =>
  import('../components/ErrorMessage/ErrorMessage')
);

export const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setIsLoading(true);
        setError(false);
        const data = await getMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        console.log('error: ', error);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieDetails();
  }, [movieId]);

  return (
    <main className={css.container}>
      <div className={css.page_top_wrap}>
        <BackLink to={backLinkRef.current}>Back</BackLink>
      </div>
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      {!error && <MovieDetails movie={movie} />}
    </main>
  );
};

export default MovieDetailsPage;
