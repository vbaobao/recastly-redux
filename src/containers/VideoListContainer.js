import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';

// var VideoListContainer = () => {
//   return <VideoList handleVideoListEntryTitleClick={prop.handleVideoListEntryTitleClick}/>
// };

const mapDispatchToProps = (dispatch) => {
  return { handleVideoListEntryTitleClick: () => dispatch({type: 'CHANGE_VIDEO'}) }
}

const mapStateToProps = (state) => {
  return { videos: state.videoList };
}
//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.
var VideoListContainer = connect(mapStateToProps, mapDispatchToProps)(VideoList);

export default VideoListContainer;


//should have a prop called handleVideoListEntryTitleClick which dispatches changeVideo