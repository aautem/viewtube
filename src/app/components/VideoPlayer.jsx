import React from 'react';
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText} from 'material-ui/Card';

const VideoPlayer = (props) => {
  return (
    <Card style={{width: "60%", display: "inline-block", margin: "10px 0 0 20px", verticalAlign: "top"}}>
      <CardMedia className="video">
        <iframe
          src={`https://www.youtube.com/embed/${props.video.id.videoId}`}
          allowFullScreen>
        </iframe>
      </CardMedia>
      <CardTitle title={props.video.snippet.title} subtitle={props.video.snippet.channelTitle} />
      <CardText>{props.video.snippet.description}</CardText>
    </Card>
  );
};

export default VideoPlayer;
