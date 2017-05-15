import React, {Component} from 'react';
import $ from 'jquery';
import randomWords from 'random-words';

import reactVideos from './../data/reactVideos';
import reduxVideos from './../data/reduxVideos';
import routerVideos from './../data/routerVideos';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Nav from './Nav.jsx';
import SearchBar from './SearchBar.jsx';
import VideoRow from './VideoRow.jsx';
import VideoPlayer from './VideoPlayer.jsx';
import VideoColumn from './VideoColumn.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'home',
      video: reactVideos[0],
      videos: reactVideos
    };
    this.handleVideoClick = this.handleVideoClick.bind(this);
    this.searchYouTube = this.searchYouTube.bind(this);
    this.searchButtonClick = this.searchButtonClick.bind(this);
    this.getRandomVideo = this.getRandomVideo.bind(this);
    this.changePage = this.changePage.bind(this);
  }

  componentDidMount() {
    var that = this;
    $('#search-field').on('keyup', function(e) {
      if (e.keyCode === 13) {
        var query = e.target.value;
        e.target.value = '';
        that.searchYouTube(query);
      }
    });
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
        page: 'results',
        videos: videos,
        video: video
      };
    });
  }

  searchButtonClick() {
    let input = document.getElementById('search-field');
    let query = input.value;
    input.value = ''
    this.searchYouTube(query);
  }

  getRandomVideo() {
    let word = randomWords();
    this.searchYouTube(word);
  }

  changePage(page) {
    this.setState({
      page: page
    });
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Nav
            changePage={this.changePage}
            getRandomVideo={this.getRandomVideo}
          />
          <SearchBar searchButtonClick={this.searchButtonClick} />

          {this.state.page === 'home' &&
            <div>
              <h2>React Tutorials</h2>
              <VideoRow
                videos={reactVideos}
                handleVideoClick={this.handleVideoClick}
              />

              <h2>Redux Tutorials</h2>
              <VideoRow
                videos={reduxVideos}
                handleVideoClick={this.handleVideoClick}
              />

              <h2>React Router Tutorials</h2>
              <VideoRow
                videos={routerVideos}
                handleVideoClick={this.handleVideoClick}
              />
            </div>
          }

          {this.state.page === 'results' &&
          <div>
            <VideoPlayer video={this.state.video} />
            <VideoColumn
              videos={this.state.videos}
              handleVideoClick={this.handleVideoClick}
            />
          </div>}
        </div>
      </MuiThemeProvider>
    );
  }
}
