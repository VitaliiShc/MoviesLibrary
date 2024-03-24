export const defaultImg =
  'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';

export const displayYear = (date) => {
  return new Date(date).getFullYear();
};

export const displayRuntimeHrsMns = (runtime) => {
  const hrs = Math.floor(runtime / 60);
  const mns = String(runtime % 60).padStart(2, '0');
  return `${hrs}h ${mns}m`;
};

export const fixedToOneDecimalPlace = (number) => {
  return Number(number).toFixed(1);
};

export const moviesListRequiredData = (results) =>
  results.map((movie) => {
    return {
      id: movie.id,
      title: movie.title,
      posterSrc: movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : defaultImg,
    };
  });

export const moviesCastRequiredData = (cast) =>
  cast.map((actor) => {
    return {
      id: actor.id,
      name: actor.name,
      character: actor.character,
      awatarSrc: actor.profile_path
        ? `https://media.themoviedb.org/t/p/w138_and_h175_face${actor.profile_path}`
        : defaultImg,
    };
  });

export const createDate = (isoDate) => {
  const date = new Date(isoDate);
  const nameOdMonth = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const day = String(date.getDate()).padStart(2, '0');
  const month = nameOdMonth[date.getMonth()];
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
};

export const moviesReviewsRequiredData = (reviews) =>
  reviews.map((review) => {
    return {
      id: review.id,
      author: review.author,
      content: review.content,
      updated_at: createDate(review.updated_at),
    };
  });

export const assemblyGenres = (genres) => {
  return genres.map((item) => item.name).join(', ');
};
