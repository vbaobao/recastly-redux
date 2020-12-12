import Redux from 'redux';

const initialState = null;

var currentVideoReducer = (state = initialState, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  if (action.type === 'CHANGE_VIDEO') {
    return action.video;
  }
  return state;
};

export default currentVideoReducer;
