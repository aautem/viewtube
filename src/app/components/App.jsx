import React, {Component} from 'react';
import $ from 'jquery';

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
    $.ajax('https://www.googleapis.com/youtube/v3/search', {
      data: {
        part: 'snippet',
        maxResults: options.max || 5,
        q: options.query,
        type: 'video',
        videoEmbeddable: true,
        key: options.key
      },
      success: (data, textStatus, jqXHR) => {
        console.log('Successful Request.');
        callback(data.items); // Array of videos
      },
      error: (jqXHR, textStatus, err) => {
        console.log(err);
      }
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

          <VideoPlayer video={this.state.video} />
          <VideoColumn videos={this.state.videos} />

          <div className="col-1"></div>
        </main>

      </div>
    );
  }
}
