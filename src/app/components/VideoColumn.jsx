import React from 'react';
import VideoThumb from './VideoThumb.jsx';

const VideoColumn = (props) => {
  return (
    <div className="col-4">
      <VideoThumb video={props.videos[1]}
        handleVideoClick={props.handleVideoClick}
        index={1} />
      <div className="row"><br /></div>
      <VideoThumb video={props.videos[2]}
        handleVideoClick={props.handleVideoClick}
        index={2} />
      <div className="row"><br /></div>
      <VideoThumb video={props.videos[3]}
        handleVideoClick={props.handleVideoClick}
        index={3} />
      <div className="row"><br /></div>
      <VideoThumb video={props.videos[4]}
        handleVideoClick={props.handleVideoClick}
        index={4} />
    </div>
  );
};

export default VideoColumn;
