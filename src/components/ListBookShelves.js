import BookShelf from "./BookShelf";

const ListBookShelves = () => (
  <div className="list-books-content">
    <div>
      <BookShelf title={"Currently Reading"} />
      <BookShelf title={"Want to Read"} />
      <BookShelf title={"Read"} />
    </div>
  </div>
);

export default ListBookShelves;
