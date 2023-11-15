import PropTypes from "prop-types";
import ListBooks from "./ListBooks";

const BookShelf = ({ shelfTitle, books, updateShelfChange }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          <ListBooks books={books} updateShelfChange={updateShelfChange} />
        </ol>
      </div>
    </div>
  );
};

BookShelf.propTypes = {
  shelfTitle: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  updateShelfChange: PropTypes.func.isRequired,
};

export default BookShelf;
