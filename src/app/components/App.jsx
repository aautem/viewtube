import React, {Component} from 'react';
import {connect} from 'react-redux';
import randomWords from 'random-words';

import reactVideos from './../data/reactVideos';
import reduxVideos from './../data/reduxVideos';
import routerVideos from './../data/routerVideos';

import Nav from './Nav.jsx';
import Home from './Home.jsx';
import Results from './Results.jsx';
import Footer from './Footer.jsx';

import {
  goHome,
  fetchVideos,
  updateVideos
} from './../actions/videoDataActions';

@connect((store) => {
  return {
    page: store.page,
    video: store.video,
    videos: store.videos
  };
})

export default class App extends Component {
  componentDidMount() {
    console.log('Component Mounted.');
    var that = this;
    var input = document.getElementsByClassName('searchbar__input')[0];
    input.addEventListener('keyup', function(e) {
      if (e.keyCode === 13) {
        var query = e.target.value;
        e.target.value = '';
        that.props.dispatch(fetchVideos(query));
      }
    });
  }

  // videos array: put (video) in [0], put [0] in (video) spot
  handleVideoClick(video, index) {
    var videos = this.props.videos.slice();
    videos[index] = videos[0];
    videos[0] = video;
    this.props.dispatch(updateVideos(videos));
  }

  searchButtonClick() {
    var input = document.getElementsByClassName('searchbar__input')[0];
    var query = input.value;
    input.value = '';
    this.props.dispatch(fetchVideos(query));
  }

  getRandomVideo() {
    var word = randomWords();
    this.props.dispatch(fetchVideos(word));
  }

  goHome() {
    this.props.dispatch(goHome());
  }

  render() {
    return (
      <div className="container">
        <Nav
          goHome={this.goHome.bind(this)}
          getRandomVideo={this.getRandomVideo.bind(this)}
          searchButtonClick={this.searchButtonClick.bind(this)}
        />

        {this.props.page === 'home' &&
          <Home
            firstRow={reactVideos}
            secondRow={reduxVideos}
            thirdRow={routerVideos}
            handleVideoClick={this.handleVideoClick.bind(this)}
          />
        }

        {this.props.page === 'results' &&
          <Results
            video={this.props.video}
            videos={this.props.videos}
            handleVideoClick={this.handleVideoClick.bind(this)}
          />
        }

        <Footer />
      </div>
    );
  }
}
