import React from 'react';
import SearchBar from './SearchBar.jsx';

const Nav = (props) => {
  return (
    <div className="nav col-12">
      <div className="nav__logo col-2">
        <h1 onClick={props.goHome}>ViewTube</h1>
      </div>

      <div className="col-1"></div>

      <div className="col-6">
        <SearchBar searchButtonClick={props.searchButtonClick} />
      </div>

      <div className="col-1"></div>

      <div className="nav__button col-2">
        <button
          onClick={props.getRandomVideo}>Surprise Me!</button>
      </div>
    </div>
  );
};

export default Nav;
