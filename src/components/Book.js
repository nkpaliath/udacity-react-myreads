import BookShelfChanger from "./BookShelfChanger";

const Book = ({ title, author, imageUrl }) => (
  <div className="book">
    <div className="book-top">
      <div
        className="book-cover"
        style={{
          width: 128,
          height: 193,
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <BookShelfChanger />
    </div>
    <div className="book-title">{title}</div>
    <div className="book-authors">{author}</div>
  </div>
);

export default Book;
