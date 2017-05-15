import React from 'react';
import {List, ListItem} from 'material-ui/List';

import VideoThumb from './VideoThumb.jsx';

const VideoColumn = (props) => {
  return (
    <List style={{width: "35%", display: "inline-block", margin: "10px 0 0 25px", verticalAlign: "top", backgroundColor: "white"}}>
      {props.videos.map((video, index) => {
        if (index !== 0) {
          return (
            <VideoThumb
              video={video}
              key={video.id.videoId}
              index={index}
              handleVideoClick={props.handleVideoClick}
            />
          );
        }
      })}
    </List>
  );
};

export default VideoColumn;
