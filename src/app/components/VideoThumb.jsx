import React from 'react';
import {List, ListItem} from 'material-ui/List';

const VideoThumb = (props) => {
  return (
    <ListItem
      primaryText={props.video.snippet.title}
      secondaryText={props.video.snippet.channelTitle}
      onClick={props.handleVideoClick.bind(null, props.video, props.index)}
    >
      <img src={props.video.snippet.thumbnails.default.url} />
    </ListItem>
  );
};

export default VideoThumb;
