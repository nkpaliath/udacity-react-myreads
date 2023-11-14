import PropTypes from "prop-types";
import Book from "./Book";

const ListBooks = ({ books = [], updateShelfChange, displaySearch }) => {
  return books.map((book) => (
    <li key={book.id}>
      <Book
        book={book}
        onShelfChange={updateShelfChange}
        displaySearch={displaySearch}
      />
    </li>
  ));
};

ListBooks.propTypes = {
  books: PropTypes.array,
  updateShelfChange: PropTypes.func.isRequired,
  displaySearch: PropTypes.bool.isRequired,
};

export default ListBooks;
