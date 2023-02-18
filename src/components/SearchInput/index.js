import PropTypes from "prop-types";

const SearchInput = (props) => {
  return (
    <form className="form" onSubmit={props.onSubmit}>
      <input
        onChange={props.onChange}
        value={props.value}
        className="input"
        type="text"
        placeholder="List"
      />
      <button className="add-button" type="submit">
        Add
      </button>
    </form>
  );
};

SearchInput.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default SearchInput;
