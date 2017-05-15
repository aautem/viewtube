import React from 'react';
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText} from 'material-ui/Card';

const VideoHome = (props) => {
  return (
    <Card style={{width: "23%", display: "inline-block", margin: "0 10px", verticalAlign: "top"}}>
      <CardHeader
        title={props.video.snippet.title}
        subtitle={props.video.snippet.channelTitle}
      />
      <CardMedia onClick={props.handleVideoClick.bind(null, props.video, props.index)}>
        <img src={props.video.snippet.thumbnails.high.url} />
      </CardMedia>
      <CardText>{props.video.snippet.description}</CardText>
    </Card>
  );
};

export default VideoHome;
