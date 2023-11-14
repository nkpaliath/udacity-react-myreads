import BookShelfChanger from "./BookShelfChanger";
import { update } from "../BooksAPI";

const Book = ({ book, onShelfChange, displaySearch }) => {
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
          displayNone={displaySearch}
        />
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">
        {book.authors && book.authors.join(", ")}
      </div>
    </div>
  );
};

export default Book;
