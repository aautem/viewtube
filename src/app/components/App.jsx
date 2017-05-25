import React, {Component} from 'react';
import $ from 'jquery';
import randomWords from 'random-words';

import reactVideos from './../data/reactVideos';
import reduxVideos from './../data/reduxVideos';
import routerVideos from './../data/routerVideos';

import Nav from './Nav.jsx';
import Home from './Home.jsx';
import Results from './Results.jsx';
import Footer from './Footer.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'results',
      video: reactVideos[0],
      videos: reactVideos
    };
    // this.handleVideoClick = this.handleVideoClick.bind(this);
    // this.searchYouTube = this.searchYouTube.bind(this);
    // this.searchButtonClick = this.searchButtonClick.bind(this);
    // this.getRandomVideo = this.getRandomVideo.bind(this);
    // this.changePage = this.changePage.bind(this);
  }

  componentDidMount() {
    console.log('Component Mounted.');
    // var that = this;
    // $('#search-field').on('keyup', function(e) {
    //   if (e.keyCode === 13) {
    //     var query = e.target.value;
    //     e.target.value = '';
    //     that.searchYouTube(query);
    //   }
    // });
  }

  searchYouTube(query) {
    console.log('Searching YouTube.');
    // var that = this;
    // $.ajax('https://www.googleapis.com/youtube/v3/search', {
    //   data: {
    //     part: 'snippet',
    //     maxResults: 5,
    //     q: query,
    //     type: 'video',
    //     videoEmbeddable: true,
    //     key: that.props.YOUTUBE_API_KEY
    //   },
    //   success: (data, textStatus, jqXHR) => {
    //     that.setState({
    //       page: 'results',
    //       videos: data.items,
    //       video: data.items[0]
    //     });
    //   },
    //   error: (jqXHR, textStatus, err) => {
    //     console.log(err);
    //   }
    // });
  }

  // videos array: put (video) in [0], put [0] in (video) spot
  handleVideoClick(video, index) {
    console.log('Handling Video Click.');
    // this.setState(function(prevState) {
    //   var videos = prevState.videos.slice();
    //   videos[index] = videos[0];
    //   videos[0] = video;
    //   return {
    //     page: 'results',
    //     videos: videos,
    //     video: video
    //   };
    // });
  }

  searchButtonClick() {
    console.log('Search Button Clicked.');
    // let input = document.getElementById('search-field');
    // let query = input.value;
    // input.value = ''
    // this.searchYouTube(query);
  }

  getRandomVideo() {
    console.log('Getting Random Video.');
    // let word = randomWords();
    // this.searchYouTube(word);
  }

  changePage(page) {
    console.log('Changing Page.');
    // if (page === 'home') {
    //   this.setState({
    //     page: page,
    //     video: reactVideos[0],
    //     videos: reactVideos
    //   });
    // } else {
    //   this.setState({
    //     page: page
    //   });
    // }
  }

  render() {
    return (
      <div className="container">
        <Nav
          changePage={this.changePage}
          getRandomVideo={this.getRandomVideo}
          searchButtonClick={this.searchButtonClick}
        />

        {this.state.page === 'home' &&
          <Home
            firstRow={reactVideos}
            secondRow={reduxVideos}
            thirdRow={routerVideos}
            handleVideoClick={this.handleVideoClick}
          />
        }

        {this.state.page === 'results' &&
          <Results
            video={this.state.video}
            videos={this.state.videos}
            handleVideoClick={this.handleVideoClick}
          />
        }

      </div>
    );
  }
}


//         <Footer />
