import React from 'react';

const Video = (props) => {
  console.log('Video:', props.video);
  return (
    <div className="row">
      <div className="video col-12">
        <iframe src={`https://www.youtube.com/embed/${props.video.id.videoId}`}
          allowFullScreen></iframe>
      </div>
    </div>
  );
};

export default Video;
