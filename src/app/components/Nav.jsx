import React from 'react';
import randomWords from 'random-words';

import SearchBar from './SearchBar.jsx';

const Nav = (props) => {
  return (
    <nav className="nav row">
      <h3 onClick={props.changePage.bind(null, 'home')}
        className="col-2">ViewTube</h3>
      <SearchBar searchYouTube={props.searchYouTube} />
      <div className="col-2">
        <button onClick={props.searchYouTube.bind(null, randomWords())}>
          Surprise Me!
        </button>
      </div>
    </nav>
  );
};

export default Nav;
