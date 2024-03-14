import { Component } from 'react';
import './search-box.styles.css'

class SearchBox extends Component {
  render() {
    const { onChangeHandler, className, placeholder } = this.props;
    return (
      <input
        type='search'
        className={className}
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    );
  }
}

export default SearchBox;
