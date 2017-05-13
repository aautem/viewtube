import React from 'react';
import VideoThumb from './VideoThumb.jsx';

import videoData from './../data/videoData.js';

const VideoColumn = (props) => {
  return (
    <div className="video-column col-4">
      <VideoThumb video={videoData[1]} />
      <div className="row"><br /></div>
      <VideoThumb video={videoData[2]} />
      <div className="row"><br /></div>
      <VideoThumb video={videoData[3]} />
      <div className="row"><br /></div>
      <VideoThumb video={videoData[4]} />
    </div>
  );
};

export default VideoColumn;
