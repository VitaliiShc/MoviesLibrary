import css from './Pages.module.css';

import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <main className={css.container}>
      <div className={css.page_top_wrap}>
        <h1 className={css.title}>Page not found</h1>
      </div>
      <Link to="/">Back to home page!</Link>
    </main>
  );
};

export default NotFound;
