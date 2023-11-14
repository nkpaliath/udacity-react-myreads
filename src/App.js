import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import SearchBooks from "./components/SearchBooks";
import { getAll } from "./BooksAPI";

function App() {
  const [showSearchPage, setShowSearchPage] = useState(false);
  const [booksInShelves, setBooksInShelves] = useState([]);

  useEffect(() => {
    if (!showSearchPage) {
      getBooks();
    }
  }, [showSearchPage]);

  const getBooks = async () => {
    const res = await getAll();
    setBooksInShelves(res);
  };

  const handleUpdateShelfChange = () => {
    getBooks();
  };

  return (
    <div className="app">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <HomePage
              onOpenSearch={() => setShowSearchPage(true)}
              books={booksInShelves}
              handleUpdateShelfChange={handleUpdateShelfChange}
            />
          }
        />
      </Routes>
      {showSearchPage ? (
        <SearchBooks
          onCloseSearch={() => setShowSearchPage(false)}
          booksInShelves={booksInShelves}
          handleUpdateShelfChange={handleUpdateShelfChange}
        />
      ) : (
        <HomePage
          onOpenSearch={() => setShowSearchPage(true)}
          books={booksInShelves}
          handleUpdateShelfChange={handleUpdateShelfChange}
        />
      )}
    </div>
  );
}

export default App;
