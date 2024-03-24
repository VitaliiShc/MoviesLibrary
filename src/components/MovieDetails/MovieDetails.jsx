import css from './MovieDetails.module.css';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import clsx from 'clsx';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import Loader from '../Loader/Loader';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export const MovieDetails = ({
  movie: {
    title,
    posterSrc,
    runtime,
    releaseYear,
    tagline,
    overview,
    ratingTMDB,
    genres,
  },
}) => {
  return (
    <>
      <div className={css.detailsWrap}>
        <LazyLoadImage
          src={posterSrc}
          alt={`${title} poster`}
          width={300}
          height={450}
        />
        <div className={css.info}>
          <h1 className={css.title}>
            {title} (<span>{releaseYear})</span>
          </h1>
          <p className={css.tagline}>{tagline}</p>
          <p className={css.genres}>{genres}</p>
          <p className={css.overview}>
            <span className={css.subTitle}>
              Overview:
              <br />
            </span>
            {overview}
          </p>
          <p>
            <span className={css.subTitle}>Runtime:</span> {runtime}
          </p>
          <p>
            <span className={css.subTitle}>TMDB rating:</span> {ratingTMDB}
          </p>
          <ul className={css.extraInfo}>
            <li>
              <NavLink to="cast" className={buildLinkClass}>
                Cast
                <MdKeyboardArrowDown size={25} className={css.arrowDown} />
              </NavLink>
            </li>
            <li>
              <NavLink to="reviews" className={buildLinkClass}>
                Reviews
                <MdKeyboardArrowDown size={25} className={css.arrowDown} />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
