import ListBooks from "./ListBooks";
import { search } from "../BooksAPI";
import { useEffect, useState } from "react";

const SearchBooks = ({
  onCloseSearch,
  booksInShelves,
  handleUpdateShelfChange,
}) => {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const getBooks = async () => {
      if (query !== "") {
        const res = await search(query.trim());
        if (res instanceof Array) {
          setBooks(res);
        } else {
          setBooks([]);
        }
      }
    };

    getBooks();
  }, [query]);

  useEffect(() => {
    setBooks((prevBooks) =>
      prevBooks.map((item) => {
        const bookInShelf = booksInShelves.find((book) => book.id === item.id);
        if (bookInShelf) {
          item.shelf = bookInShelf.shelf;
        }
        return item;
      })
    );
  }, [booksInShelves]);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <a href="#Home" className="close-search" onClick={onCloseSearch}>
          Close
        </a>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value.trim());
            }}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {query && (
            <ListBooks
              books={books}
              updateShelfChange={handleUpdateShelfChange}
              displaySearch={true}
            />
          )}
        </ol>
      </div>
    </div>
  );
};

export default SearchBooks;
