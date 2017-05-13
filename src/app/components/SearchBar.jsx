import React from 'react';

const SearchBar = (props) => {
  return (
    <div className="search col-8">
      <input type="text" id="search-field" placeholder="Search ViewTube..." />
      <button onClick={function() {
        var input = document.getElementById('search-field');
        var query = input.value;
        input.value = '';
        props.searchYouTube(query);
      }}>Search</button>
    </div>
  );
};

export default SearchBar;
