import React, {Component} from 'react';

import Nav from './Nav.jsx';
import VideoPlayer from './VideoPlayer.jsx';
import VideoColumn from './VideoColumn.jsx';

let YOUTUBE_API_KEY;

if (process.env.YOUTUBE_API_KEY) {
  YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
} else {
  import YOUTUBE_KEY from './../config/youtube.js';
  YOUTUBE_API_KEY = YOUTUBE_KEY;
}

console.log('YouTube Key:', YOUTUBE_API_KEY);

export default class App extends Component {
  constructor(props) {
    console.log('*** App Props ***', props);
    super(props);
    this.state = {
      video: {},
      videos: []
    };
    this.handleVideoClick = this.handleVideoClick.bind(this);
  }

  componentDidMount() {
    console.log('*** Initializing App ***');
    // this.props.searchYouTube({
    //   query: 'Tracy McGrady',
    //   key: window.YOUTUBE_API_KEY
    // }, (videos) => {
    //   this.setState({
    //     videos: videos,
    //     video: videos[0]
    //   });
    // });
  }

  handleVideoClick(video) {
    this.setState({
      video: video
    });
  }

  render() {
    return (
      <div className="container">
        <Nav />

        <main className="row">
          <div className="col-1"></div>

          <VideoPlayer />
          <VideoColumn />

          <div className="col-1"></div>
        </main>

      </div>
    );
  }
}
