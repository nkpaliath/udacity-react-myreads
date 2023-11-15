import PropTypes from "prop-types";

const BookShelfChanger = ({ shelf = "none", handleShelfChange }) => {
  return (
    <div className="book-shelf-changer">
      <select
        value={shelf}
        onChange={(e) => {
          handleShelfChange(e.target.value);
        }}
      >
        <option value="" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

BookShelfChanger.propTypes = {
  shelf: PropTypes.string,
  handleShelfChange: PropTypes.func.isRequired,
};

export default BookShelfChanger;
