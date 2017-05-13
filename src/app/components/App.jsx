import React, {Component} from 'react';

import Nav from './Nav.jsx';
import VideoPlayer from './VideoPlayer.jsx';
import VideoColumn from './VideoColumn.jsx';

let YOUTUBE_API_KEY;
(function() {
  return fetch('https://view-tube.herokuapp.com/api/keys/youtube').then(function(response) {
    if (response.ok) {
      return response.json();
    }
  }).then(function(key) {
    console.log('API Key:', key);
    YOUTUBE_API_KEY = key;
  });
})();

setTimeout(function() {
  console.log('Checking Key:', YOUTUBE_API_KEY);
}, 8000);

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
