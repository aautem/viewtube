import React from 'react';
import VideoPlayer from './VideoPlayer.jsx';
import VideoColumn from './VideoColumn.jsx';

const Results = (props) => {
  return (
    <div className="results col-12">
      <div className="col-1"></div>

      <div className="col-7">
        <VideoPlayer video={props.video} />
      </div>

      <div className="col-3">
        <VideoColumn
          videos={props.videos}
          handleVideoClick={props.handleVideoClick}
        />
      </div>

      <div className="col-1"></div>
    </div>
  );
};

export default Results;
