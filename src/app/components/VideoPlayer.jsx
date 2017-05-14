import React from 'react';
import Video from './Video.jsx';
import VideoInfo from './VideoInfo.jsx';

const VideoPlayer = (props) => {
  return (
    <div className="col-6">
      <Video video={props.video} />
      <div className="row"><br /></div>
      <VideoInfo video={props.video} />
    </div>
  );
};

export default VideoPlayer;
