import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => (
  //TODO:  Write an asynchronous action to handle a video search!
  //TODO: debounce, searchYouTube
  {type: 'SEARCH', payload: searchYoutube({key: YOUTUBE_API_KEY, q: q}, (data) => videoList(data.items))}
);

export default handleVideoSearch;
