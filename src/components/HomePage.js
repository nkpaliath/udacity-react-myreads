import Header from "./Header";
import ListBookShelves from "./ListBookShelves";
import OpenSearchPage from "./OpenSearchPage";

const HomePage = () => (
  <div className="list-books">
    <Header />
    <ListBookShelves />
    <OpenSearchPage />
  </div>
);

export default HomePage;
