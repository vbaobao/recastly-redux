import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';

const mapDispatchToProps = (dispatch) => {
  return { handleVideoListEntryTitleClick: (video) => dispatch(changeVideo(video)) }
}

const mapStateToProps = (state) => {
  return { videos: state.videoList };
}

var VideoListContainer = connect(mapStateToProps, mapDispatchToProps)(VideoList);

export default VideoListContainer;