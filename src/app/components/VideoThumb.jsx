import React from 'react';

const VideoThumb = (props) => {
  return (
    <div onClick={props.handleVideoClick.bind(null, props.video, props.index)} className="video-thumb row">
      <div className="col-5">
        <img src={props.video.snippet.thumbnails.high.url}
          alt="" />
      </div>
      <div className="col-7">
        <h5>{props.video.snippet.title}</h5>
        <p>{props.video.snippet.channelTitle}</p>
      </div>
    </div>
  );
};

export default VideoThumb;
