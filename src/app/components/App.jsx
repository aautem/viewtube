import React, {Component} from 'react';

import Nav from './Nav.jsx';
import VideoPlayer from './VideoPlayer.jsx';
import VideoColumn from './VideoColumn.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video: {},
      videos: []
    };
    this.handleVideoClick = this.handleVideoClick.bind(this);
  }

  componentDidMount() {
    console.log('*** Initializing App ***');
    this.searchYouTube({
      query: 'Tracy McGrady',
      key: this.props.YOUTUBE_API_KEY
    }, (videos) => {
      this.setState({
        videos: videos,
        video: videos[0]
      });
    });
  }

  searchYouTube(options, callback) {
    return fetch('https://www.googleapis.com/youtube/v3/search', {
      part: 'snippet',
      maxResults: options.max || 4,
      q: options.query,
      type: 'video',
      videoEmbeddable: true,
      key: options.key
    }).then(function(response) {
      return response.json();
    }).then(function(videos) {
      callback(videos);
    }).catch(function(error) {
      console.log('Error:', error.message);
    });
  }

  handleVideoClick(video) {
    this.setState({
      video: video
    });
  }

  render() {
    console.log('App Props:', this.props);
    console.log('App State:', this.state);
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
