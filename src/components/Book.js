import PropTypes from "prop-types";
import BookShelfChanger from "./BookShelfChanger";
import { update } from "../BooksAPI";

const Book = ({ book, onShelfChange }) => {
  const updateBookShelf = async (shelf) => {
    await update(book, shelf);
    book.shelf = shelf;
    onShelfChange();
  };

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${
              book.imageLinks && book.imageLinks.thumbnail
            })`,
          }}
        ></div>
        <BookShelfChanger
          shelf={book.shelf}
          handleShelfChange={updateBookShelf}
        />
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">
        {book.authors && book.authors.join(", ")}
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  onShelfChange: PropTypes.func.isRequired,
};

export default Book;
