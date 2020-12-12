import Redux from 'redux';

const initialState = {};

var currentVideoReducer = (state = initialState, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  if (action.type === 'CHANGE_VIDEO') {
    return {
      ...state,
      currentVideo: action.video
    }
  }
  return state;
};

export default currentVideoReducer;
