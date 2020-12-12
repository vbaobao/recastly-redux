import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import videoList from '../components/VideoList.js';
import VideoListContainer from '../containers/VideoListContainer.js';

var handleVideoSearch = (q) => {
  var handleSearch = () => (
    {
      type: 'SEARCH',
      payload: searchYouTube({key: YOUTUBE_API_KEY, q: q}, (data) => VideoListContainer(data.items))
    }
  )
  return handleSearch;
};

export default handleVideoSearch;