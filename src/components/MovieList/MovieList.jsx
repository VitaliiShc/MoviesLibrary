import css from './MovieList.module.css';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link, useLocation } from 'react-router-dom';

export const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={css.list}>
      {movies.map((movie) => (
        <li key={movie.id} className={css.item}>
          <Link
            to={`/movies/${movie.id}`}
            state={{ from: location }}
            className={css.link}
          >
            <LazyLoadImage
              src={movie.posterSrc}
              alt={`${movie.title} poster`}
              width={300}
              height={400}
              className={css.img}
            />
            <div className={css.title_wrap}>
              <h3 className={css.title}>{movie.title}</h3>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
