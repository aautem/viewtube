import React, {Component} from 'react';
import $ from 'jquery';
import sampleData from './../data/sampleData.js';

import Nav from './Nav.jsx';
import VideoPlayer from './VideoPlayer.jsx';
import VideoColumn from './VideoColumn.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'home',
      video: sampleData[0],
      videos: sampleData
    };
    this.handleVideoClick = this.handleVideoClick.bind(this);
    this.searchYouTube = this.searchYouTube.bind(this);
    this.changePage = this.changePage.bind(this);
  }

  searchYouTube(query) {
    var that = this;
    $.ajax('https://www.googleapis.com/youtube/v3/search', {
      data: {
        part: 'snippet',
        maxResults: 5,
        q: query,
        type: 'video',
        videoEmbeddable: true,
        key: that.props.YOUTUBE_API_KEY
      },
      success: (data, textStatus, jqXHR) => {
        console.log('Success:', data.items);
        that.setState({
          page: 'results',
          videos: data.items,
          video: data.items[0]
        });
      },
      error: (jqXHR, textStatus, err) => {
        console.log(err);
      }
    });
  }

  // videos array: put (video) in [0], put [0] in (video) spot
  handleVideoClick(video, index) {
    this.setState(function(prevState) {
      var videos = prevState.videos.slice();
      videos[index] = videos[0];
      videos[0] = video;
      return {
        videos: videos,
        video: video
      };
    });
  }

  changePage(page) {
    this.setState({
      page: page
    });
  }

  render() {
    console.log('App Props:', this.props);
    console.log('App State:', this.state);
    return (
      <div className="container">
        <Nav searchYouTube={this.searchYouTube}
          changePage={this.changePage} />

        {this.state.page === 'home' &&
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">
            ROW ONE
          </div>
          <div className="col-1"></div>
        </div>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">
            ROW TWO
          </div>
          <div className="col-1"></div>
        </div>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">
            ROW THREE
          </div>
          <div className="col-1"></div>
        </div>}

        {this.state.page === 'results' &&
        <main className="row">
          <div className="col-1"></div>

          <VideoPlayer video={this.state.video} />
          <VideoColumn videos={this.state.videos}
            handleVideoClick={this.handleVideoClick} />

          <div className="col-1"></div>
        </main>}

      </div>
    );
  }
}
