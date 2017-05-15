import React from 'react';
import VideoHome from './VideoHome.jsx';

const VideoRow = (props) => {
  return (
    <div className="video-row">
      {props.videos.slice(0, 4).map((video, index) => {
        return (
          <VideoHome
            video={video}
            key={index}
            index={index}
            handleVideoClick={props.handleVideoClick}
          />
        );
      })}
    </div>
  );
};

export default VideoRow;
