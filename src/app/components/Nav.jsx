import React from 'react';
import SearchBar from './SearchBar.jsx';

const Nav = (props) => {
  return (
    <div className="nav col-12">
      <div className="col-2">
        <h1
          className="nav__logo"
          onClick={props.changePage.bind(null, 'home')}>ViewTube</h1>
      </div>

      <div className="col-1"></div>

      <div className="col-6">
        <SearchBar
          changePage={props.changePage}
          searchButtonClick={props.searchButtonClick}
        />
      </div>

      <div className="col-1"></div>

      <div className="col-2">
        <button
          className="nav__button"
          onClick={props.getRandomVideo}>Surprise Me!</button>
      </div>
    </div>
  );
};

export default Nav;
