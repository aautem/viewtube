import React from 'react';

const VideoInfo = (props) => {
  return (
    <div className="row">
      <div className="video-info col-12">
        <h3>{props.video.snippet.title}</h3>
        <h4>{props.video.snippet.channelTitle}</h4>
        <p>{props.video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoInfo;
