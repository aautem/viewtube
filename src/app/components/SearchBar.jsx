import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const SearchBar = (props) => {
  return (
    <div className="search-bar">
      <TextField
        id="search-field"
        hintText="e.g. JavaScript"
        floatingLabelText="Search ViewTube"
        floatingLabelFixed={true}
        style={{marginLeft: "20px", marginTop: "-10px", width: "50%"}}
      />

      <RaisedButton
        label="Search"
        primary={true}
        style={{marginLeft: "20px"}}
        onTouchTap={props.searchButtonClick}
      />
    </div>
  );
};

export default SearchBar;
