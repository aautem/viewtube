import React from 'react';
import SearchBar from './SearchBar.jsx';

const Nav = (props) => {
  return (
    <nav className="nav row">
      <h3 className="col-2">ViewTube</h3>
      <SearchBar searchYouTube={props.searchYouTube} />
      <div className="col-2">
        <button>Log In</button>
      </div>
    </nav>
  );
};

export default Nav;
