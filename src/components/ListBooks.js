import PropTypes from "prop-types";
import Book from "./Book";

const ListBooks = ({ books = [], updateShelfChange }) => {
  return books.map((book) => (
    <li key={book.id}>
      <Book book={book} onShelfChange={updateShelfChange} />
    </li>
  ));
};

ListBooks.propTypes = {
  books: PropTypes.array,
  updateShelfChange: PropTypes.func.isRequired,
};

export default ListBooks;
