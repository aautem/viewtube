import React from 'react';

const VideoResult = (props) => {
  return (
    <div className="videoresult col-12">
      <img
        src={props.video.snippet.thumbnails.default.url}
        onClick={props.handleVideoClick.bind(null, props.video, props.index)}
      />
      <h4>{props.video.snippet.title}</h4>
      <h6>{props.video.snippet.channelTitle}</h6>
    </div>
  );
};

export default VideoResult;
