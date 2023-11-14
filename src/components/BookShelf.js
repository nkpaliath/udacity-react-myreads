import ListBooks from "./ListBooks";

const BookShelf = ({ shelfTitle, books, updateShelfChange }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          <ListBooks
            books={books}
            updateShelfChange={updateShelfChange}
            displaySearch={false}
          />
        </ol>
      </div>
    </div>
  );
};

export default BookShelf;
