import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

const Nav = (props) => {
  return (
    <AppBar
      title={<span onClick={props.changePage.bind(null, 'home')} style={{cursor: "pointer"}}>ViewTube</span>}
      showMenuIconButton={false}
      iconElementRight={<FlatButton label="Surprise Me!" />}
      onRightIconButtonTouchTap={props.getRandomVideo}
      style={{backgroundColor: "#0d47a1"}}
    />
  );
};

export default Nav;
