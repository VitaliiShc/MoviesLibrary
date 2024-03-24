import css from './MovieCast.module.css';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useParams } from 'react-router-dom';
import { useEffect, useState, lazy } from 'react';

import { getMovieCast } from '../../apis/TMDB-api';
import Loader from '../Loader/Loader';
const ErrorMessage = lazy(() => import('../ErrorMessage/ErrorMessage'));

export const MovieCast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        setIsLoading(true);
        setError(false);
        const data = await getMovieCast(movieId);
        if (data.length === 0) {
          setError(true && 'noCast');
          return;
        }
        setCast(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieCast();
  }, [movieId]);
  return (
    <div>
      {isLoading && <Loader />}
      {error && <ErrorMessage alert={error} />}
      {!error && (
        <ul className={css.list}>
          {cast.map((actor) => (
            <li key={actor.id} className={css.item}>
              <div className={css.imgWrap}>
                <LazyLoadImage
                  src={actor.awatarSrc}
                  alt={actor.name}
                  width={138}
                  height={175}
                  className={css.img}
                />
              </div>
              <div className={css.infoWrap}>
                <p className={css.character}>{actor.character}</p>
                <p className={css.name}>{actor.name}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieCast;
