import axios from 'axios';

import {
  defaultImg,
  displayYear,
  displayRuntimeHrsMns,
  fixedToOneDecimalPlace,
  moviesListRequiredData,
  moviesCastRequiredData,
  moviesReviewsRequiredData,
  assemblyGenres,
} from './serviceApiFunctions';

axios.defaults.headers.common['Authorization'] =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MzlkMTA1NWEzZWUyZDIxYmQzOTA4OTNkYjE3MDdiZCIsInN1YiI6IjY1ZjgyNTVmZTIxMDIzMDE2NWVlY2NiYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HIxcPa5LrAgoFltPz8axmDDCR9OYHTlbYwB1xDbF6B8';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const getTrendingPerDay = async () => {
  const response = await axios.get('trending/movie/day');
  const requaredData = await moviesListRequiredData(response.data.results);
  return requaredData;
};

export const getMoviesByTitle = async (title) => {
  const response = await axios.get(`search/movie?query=${title}`);
  const requaredData = await moviesListRequiredData(response.data.results);
  return requaredData;
};

export const getMovieDetails = async (id) => {
  const response = await axios.get(`/movie/${id}`);
  const {
    original_title,
    poster_path,
    runtime,
    release_date,
    tagline,
    vote_average,
    overview,
    genres,
  } = await response.data;

  return {
    title: original_title,
    posterSrc: poster_path
      ? `https://image.tmdb.org/t/p/w500${poster_path}`
      : defaultImg,
    runtime: displayRuntimeHrsMns(runtime),
    releaseYear: displayYear(release_date),
    tagline,
    overview,
    ratingTMDB: fixedToOneDecimalPlace(vote_average),
    genres: assemblyGenres(genres),
  };
};

export const getMovieCast = async (id) => {
  const response = await axios.get(`/movie/${id}/credits`);
  const requaredData = await moviesCastRequiredData(response.data.cast);
  return requaredData;
};

export const getMovieReviews = async (id) => {
  const response = await axios.get(`/movie/${id}/reviews`);
  const requaredData = await moviesReviewsRequiredData(response.data.results);
  return requaredData;
};
