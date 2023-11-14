import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import SearchBooks from "./components/SearchBooks";
import { getAll } from "./BooksAPI";

function App() {
  const [booksInShelves, setBooksInShelves] = useState([]);

  useEffect(() => {
    getBooks();
  }, []);

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
              books={booksInShelves}
              handleUpdateShelfChange={handleUpdateShelfChange}
            />
          }
        />
        <Route
          path="/search"
          element={
            <SearchBooks
              booksInShelves={booksInShelves}
              handleUpdateShelfChange={handleUpdateShelfChange}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
