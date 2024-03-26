import css from './Pages.module.css';

import { useSearchParams } from 'react-router-dom';
import { useState, useEffect, lazy } from 'react';

import { getMoviesByTitle } from '../apis/TMDB-api';
import Loader from '../components/Loader/Loader';
import SearchBox from '../components/SearchBox/SearchBox';
const MovieList = lazy(() => import('../components/MovieList/MovieList'));
const ErrorMessage = lazy(() =>
  import('../components/ErrorMessage/ErrorMessage')
);

export const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams('');
  const searchedMovie = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!searchedMovie) {
      setMovies([]);
      setError('queryField');
      return;
    }
    const fetchMoviesByTitle = async () => {
      try {
        setIsLoading(true);
        setError(false);
        setMovies([]);
        const data = await getMoviesByTitle(searchedMovie);
        if (data.length === 0 && searchedMovie !== '') {
          setError('noMovie');
          return;
        }
        setMovies(data);
      } catch (error) {
        console.log('error: ', error);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMoviesByTitle();
  }, [searchedMovie]);

  const changeSearchQuery = (searchQuery) => {
    if (searchQuery.trim().length === 0) {
      setSearchParams('');
      return;
    }
    setSearchParams({ query: searchQuery });
  };

  return (
    <main className={css.container}>
      <div className={css.page_top_wrap}>
        <SearchBox
          searchedMovie={searchedMovie}
          changeSearchQuery={changeSearchQuery}
        />
      </div>
      {isLoading && <Loader />}
      {!error ? <MovieList movies={movies} /> : <ErrorMessage alert={error} />}
    </main>
  );
};

export default MoviesPage;
