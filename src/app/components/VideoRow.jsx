import React from 'react';
import VideoHome from './VideoHome.jsx';

const VideoRow = (props) => {
  return (
    <div className="video-row">
      {props.videos.map((video, index) => {
        if (index !== 4) {
          return (
            <VideoHome
              video={video}
              key={video.id.videoId}
              index={index}
              videos={props.vides}
              handleVideoClick={props.handleVideoClick}
            />
          );
        }
      })}
    </div>
  );
};

export default VideoRow;
