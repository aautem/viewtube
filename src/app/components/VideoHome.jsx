import React from 'react';

const VideoHome = (props) => {
  return (
    <div onClick={props.handleVideoClick.bind(null, props.video, props.index)}
      className="video-home col-3">
      <div className="row">
        <div className="col-12">
          <img src={props.video.snippet.thumbnails.high.url}
            alt="" />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <h5>{props.video.snippet.title}</h5>
          <p>{props.video.snippet.channelTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoHome;
