const BookShelfChanger = ({
  shelf = "none",
  handleShelfChange,
  displayNone,
}) => {
  return (
    <div className="book-shelf-changer">
      <select
        value={shelf}
        onChange={(e) => {
          handleShelfChange(e.target.value);
        }}
      >
        <option value="none" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none" hidden={displayNone}>
          None
        </option>
      </select>
    </div>
  );
};

export default BookShelfChanger;
