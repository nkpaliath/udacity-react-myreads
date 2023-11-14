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

export default ListBooks;
