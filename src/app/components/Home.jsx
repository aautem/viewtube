import React from 'react';
import VideoRow from './VideoRow.jsx';

const Home = (props) => {
  return (
    <div className="home col-12">
      <div className="col-12">
        <h1 className="home__header">React Tutorials</h1>
      </div>

      <div className="col-12">
        <VideoRow
          videos={props.firstRow}
          handleVideoClick={props.handleVideoClick}
        />
      </div>

      <div className="col-12">
        <h1 className="home__header">Redux Tutorials</h1>
      </div>

      <div className="col-12">
        <VideoRow
          videos={props.secondRow}
          handleVideoClick={props.handleVideoClick}
        />
      </div>

      <div className="col-12">
        <h1 className="home__header">React Router Tutorials</h1>
      </div>

      <div className="col-12">
        <VideoRow
          videos={props.thirdRow}
          handleVideoClick={props.handleVideoClick}
        />
      </div>
    </div>
  );
};

export default Home;
