import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import ListBooks from "./ListBooks";
import { search } from "../BooksAPI";

const SearchBooks = ({ booksInShelves, handleUpdateShelfChange }) => {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const getBooks = async () => {
      if (query !== "") {
        const res = await search(query.trim());
        if (res instanceof Array) {
          setBooks(
            res.map((item) => {
              const bookInShelf = booksInShelves.find(
                (book) => book.id === item.id
              );
              if (bookInShelf) {
                item.shelf = bookInShelf.shelf;
              }
              return item;
            })
          );
        } else {
          setBooks([]);
        }
      }
    };

    getBooks();
  }, [query, booksInShelves]);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
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

SearchBooks.propTypes = {
  booksInShelves: PropTypes.array.isRequired,
  handleUpdateShelfChange: PropTypes.func.isRequired,
};

export default SearchBooks;
