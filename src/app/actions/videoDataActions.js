export function goHome() {
  return {
    type: 'GO_HOME',
    payload: null
  };
}

export function fetchVideos(query) {
  return function(dispatch) {
    axios({
      method: 'get',
      url: 'https://www.googleapis.com/youtube/v3/search',
      data: {
        part: 'snippet',
        maxResults: 5,
        q: query,
        type: 'video',
        videoEmbeddable: true,
        key: window.YOUTUBE_KEY
      }
    })
    .then((response) => {
      dispatch({type: 'FETCH_VIDEOS', payload: response.data});
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
