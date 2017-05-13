import React from 'react';
import Video from './Video.jsx';
import VideoInfo from './VideoInfo.jsx';

import videoData from './../data/videoData.js';

const VideoPlayer = (props) => {
  return (
    <div className="col-6">
      <Video video={videoData[0]} />
      <div className="row"><br /></div>
      <VideoInfo video={videoData[0]} />
    </div>
  );
};

export default VideoPlayer;
