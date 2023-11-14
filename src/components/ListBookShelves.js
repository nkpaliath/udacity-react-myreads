import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import BookShelf from "./BookShelf";

const ListBookShelves = ({ books, updateBookShelfOnChange }) => {
  const [shelf, setShelf] = useState({
    currentlyReading: [],
    wantToRead: [],
    read: [],
  });

  useEffect(() => {
    const arrangeBooksByShelf = () => {
      const currentlyReading = books.filter(
        (book) => book.shelf === "currentlyReading"
      );
      const wantToRead = books.filter((book) => book.shelf === "wantToRead");
      const read = books.filter((book) => book.shelf === "read");

      setShelf({ currentlyReading, wantToRead, read });
    };
    arrangeBooksByShelf();
  }, [books]);

  return (
    <div className="list-books-content">
      <div>
        <BookShelf
          shelfTitle={"Currently Reading"}
          books={shelf.currentlyReading}
          updateShelfChange={updateBookShelfOnChange}
        />
        <BookShelf
          shelfTitle={"Want to Read"}
          books={shelf.wantToRead}
          updateShelfChange={updateBookShelfOnChange}
        />
        <BookShelf
          shelfTitle={"Read"}
          books={shelf.read}
          updateShelfChange={updateBookShelfOnChange}
        />
      </div>
    </div>
  );
};

ListBookShelves.propTypes = {
  books: PropTypes.array.isRequired,
  updateBookShelfOnChange: PropTypes.func.isRequired,
};

export default ListBookShelves;
