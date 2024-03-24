import css from './Pages.module.css';

import { useEffect, useState, lazy } from 'react';

import { getTrendingPerDay } from '../apis/TMDB-api';
import Loader from '../components/Loader/Loader';
import MovieList from '../components/MovieList/MovieList';
const ErrorMessage = lazy(() =>
  import('../components/ErrorMessage/ErrorMessage')
);

export const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchTranding = async () => {
      try {
        setIsLoading(true);
        setError(false);
        const data = await getTrendingPerDay();
        setMovies(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTranding();
  }, []);

  return (
    <main className={css.container}>
      <div className={css.page_top_wrap}>
        <h1 className={css.title}>Trending today</h1>
      </div>
      {isLoading && <Loader />}
      {!error ? <MovieList movies={movies} /> : <ErrorMessage />}
    </main>
  );
};

export default HomePage;
