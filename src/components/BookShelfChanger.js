import PropTypes from "prop-types";

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

BookShelfChanger.propTypes = {
  shelf: PropTypes.string,
  handleShelfChange: PropTypes.func.isRequired,
  displayNone: PropTypes.bool.isRequired,
};

export default BookShelfChanger;
