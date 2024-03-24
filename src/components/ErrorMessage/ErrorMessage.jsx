import css from './ErrorMessage.module.css';

export const ErrorMessage = ({ alert }) => {
  switch (alert) {
    case 'noMovie':
      return (
        <p className={css.errorMsg}>No movies available for your request!</p>
      );
    case 'noCast':
      return (
        <p className={css.errorMsg}>
          We don&apos;t have any cast added to this movie.
        </p>
      );
    case 'noReviews':
      return (
        <p className={css.errorMsg}>
          We don&apos;t have any reviews for this movie.
        </p>
      );
    default:
      return <p className={css.errorMsg}>Error! Reload the page!</p>;
  }
};

export default ErrorMessage;
