import React from 'react';

const VideoPlayer = (props) => {
  return (
    <div className="videoplayer col-12">
      <div className="videoplayer__video">
        <iframe
          src={`https://www.youtube.com/embed/${props.video.id.videoId}`}
          allowFullScreen>
        </iframe>
      </div>
      <div className="videoplayer__info">
        <h2>{props.video.snippet.title}</h2>
        <h4>{props.video.snippet.channelTitle}</h4>
        <p>{props.video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoPlayer;
