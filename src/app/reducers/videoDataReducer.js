import reactVideos from './../data/reactVideos';

export default function reducer(state={
  page: 'home',
  video: reactVideos[0],
  videos: reactVideos
}, action) {
  switch (action.type) {
    case 'GO_HOME': {
      return {
        ...state,
        page: 'home',
        video: reactVideos[0],
        videos: reactVideos
      };
    }
    case 'FETCH_VIDEOS': {
      return {
        ...state,
        page: 'results',
        video: action.payload[0],
        videos: action.payload
      };
    }
    case 'SWITCH_VIDEOS': {
      return {
        ...state,
        video: action.payload[0],
        videos: action.payload
      };
    }
    case 'FETCH_ERROR': {
      return {...state};
    }
  }
}
