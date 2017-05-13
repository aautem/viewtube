import React from 'react';

const SearchBar = (props) => {
  return (
    <div className="search col-8">
      <input type="text" id="search-field" placeholder="Search ViewTube..." />
      <button onClick={function() {
        var query = document.getElementById('search-field').value;
        console.log('Search Value:', query);
        props.searchYouTube(query);
      }}>Search</button>
    </div>
  );
};

export default SearchBar;
