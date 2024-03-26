import css from './SearchBox.module.css';

import { Field, Form, Formik } from 'formik';

const SearchMovies = ({ changeSearchQuery, searchedMovie }) => {
  return (
    <Formik
      initialValues={{ query: searchedMovie ?? '' }}
      onSubmit={(value) => {
        if (value.query.trim().length === 0) {
          value.query = '';
        }
        changeSearchQuery(value.query);
      }}
    >
      <Form className={css.form}>
        <Field
          placeholder="Enter a word to search"
          type="text"
          name="query"
          className={css.input}
          autoFocus
        />
        <button type="submit" className={css.btn}>
          Search
        </button>
      </Form>
    </Formik>
  );
};

export default SearchMovies;
