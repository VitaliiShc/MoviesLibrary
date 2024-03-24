import css from './ErrorMessage.module.css';

export const ErrorMessage = ({ alert }) => {
  switch (alert) {
    case 'noMovie':
      return (
        <p className={css.errorMsg}>No movies available for your request!</p>
      );
    default:
      return <p className={css.errorMsg}>Error! Reload the page!</p>;
  }
};

export default ErrorMessage;
