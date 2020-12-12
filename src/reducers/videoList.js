import Redux from 'redux';

const initialState = [];

var videoListReducer = (state = initialState, action) => {
  //TODO: define a reducer for the videoList field of our state.
  if (action.type === 'CHANGE_VIDEO_LIST') {
    return action.videos;
  }
  return state;
};

export default videoListReducer;
