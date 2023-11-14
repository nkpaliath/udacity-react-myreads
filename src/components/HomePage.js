import PropTypes from "prop-types";

import Header from "./Header";
import ListBookShelves from "./ListBookShelves";
import OpenSearchPage from "./OpenSearchPage";

const HomePage = ({ books, handleUpdateShelfChange }) => (
  <div className="list-books">
    <Header />
    <ListBookShelves
      books={books}
      updateBookShelfOnChange={handleUpdateShelfChange}
    />
    <OpenSearchPage />
  </div>
);

HomePage.propTypes = {
  books: PropTypes.array.isRequired,
  handleUpdateShelfChange: PropTypes.func.isRequired,
};

export default HomePage;
