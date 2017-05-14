import React from 'react';
import VideoHome from './VideoHome.jsx';

const VideoRow = (props) => {
  return (
    <div className="video-row col-10">
      <div className="row">
        <div className="col-12">
          <h2>{props.title}</h2>
        </div>
      </div>
      <div className="row">

        <VideoHome video={props.videos[0]}
          handleVideoClick={props.handleVideoClick}
          index={0} />

        <VideoHome video={props.videos[1]}
          handleVideoClick={props.handleVideoClick}
          index={1} />

        <VideoHome video={props.videos[2]}
          handleVideoClick={props.handleVideoClick}
          index={2} />

        <VideoHome video={props.videos[3]}
          handleVideoClick={props.handleVideoClick}
          index={3} />

      </div>
    </div>
  );
};

export default VideoRow;
