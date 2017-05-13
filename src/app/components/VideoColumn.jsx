import React from 'react';
import VideoThumb from './VideoThumb.jsx';

const VideoColumn = (props) => {
  return (
    <div className="video-column col-4">
      <VideoThumb video={props.videos[1]} />
      <div className="row"><br /></div>
      <VideoThumb video={props.videos[2]} />
      <div className="row"><br /></div>
      <VideoThumb video={props.videos[3]} />
      <div className="row"><br /></div>
      <VideoThumb video={props.videos[4]} />
    </div>
  );
};

export default VideoColumn;
