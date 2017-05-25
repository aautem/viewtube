import React from 'react';
import VideoResult from './VideoResult.jsx';

const VideoRow = (props) => {
  return (
    <div className="videorow col-12">
      <div className="col-1"></div>

      {props.videos.map((video, index) => {
        return (
          <div className="col-2" key={video.id.videoId}>
            <VideoResult
              video={video}
              index={index}
              handleVideoClick={props.handleVideoClick}
            />
          </div>
        );
      })}

      <div className="col-1"></div>
    </div>
  );
};

export default VideoRow;
