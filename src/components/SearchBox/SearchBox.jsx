import css from './SearchBox.module.css';

import { useSearchParams } from 'react-router-dom';

export const SearchBox = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchedMovie = searchParams.get('query') ?? '';

  const updateSearchString = (query) => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  return (
    <input
      autoFocus
      className={css.input}
      type="text"
      value={searchedMovie}
      onChange={(evt) => updateSearchString(evt.target.value)}
    />
  );
};

export default SearchBox;
