import React from 'react';

const SearchBar = (props) => {
  return (
    <div className="search col-8">
      <input type="text" placeholder="Search ViewTube..." />
      <button>Search</button>
    </div>
  );
};

export default SearchBar;
