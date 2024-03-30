import './search-box.styles.css'

const SearchBox = ({ onChangeHandler, className, placeholder }) => {

  return (
    <input
      type='search'
      className={className}
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
}

export default SearchBox;
