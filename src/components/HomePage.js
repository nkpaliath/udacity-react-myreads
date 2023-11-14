import Header from "./Header";
import ListBookShelves from "./ListBookShelves";
import OpenSearchPage from "./OpenSearchPage";

const HomePage = ({ onOpenSearch, books, handleUpdateShelfChange }) => (
  <div className="list-books">
    <Header />
    <ListBookShelves
      books={books}
      updateBookShelfOnChange={handleUpdateShelfChange}
    />
    <OpenSearchPage onOpenSearch={onOpenSearch} />
  </div>
);

export default HomePage;
