import css from './BackLink.module.css';

import { HiArrowLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';

export const BackLink = ({ to, children }) => {
  return (
    <Link to={to} className={css.link}>
      <HiArrowLeft size="24" />
      {children}
    </Link>
  );
};

export default BackLink;
