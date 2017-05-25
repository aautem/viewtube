import React from 'react';

const SearchBar = (props) => {
  return (
    <div className="searchbar">
      <div className="col-9">
        <input
          className="searchbar__input"
          placeholder="e.g. JavaScript"></input>
      </div>

      <div className="col-3">
        <button
          className="searchbar__button"
          onClick={props.searchButtonClick}>Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
