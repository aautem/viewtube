import axios from 'axios';

export function goHome() {
  return {
    type: 'GO_HOME',
    payload: null
  };
}

export function fetchVideos(query) {
  return function(dispatch) {
    axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        part: 'snippet',
        maxResults: 5,
        q: query,
        type: 'video',
        videoEmbeddable: true,
        key: window.YOUTUBE_API_KEY
      }
    })
    .then((response) => {
      dispatch({type: 'FETCH_VIDEOS', payload: response.data.items});
    })
    .catch((err) => {
      dispatch({type: 'FETCH_ERROR', payload: err});
    });
  }
}

export function updateVideos(videos) {
  return {
    type: 'SWITCH_VIDEOS',
    payload: videos
  };
}
