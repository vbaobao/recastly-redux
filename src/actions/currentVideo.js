var changeVideo = (video) => (
  //TODO:  Return some action object to change the currently playing video.
  //TODO: Click handler to setState on video passed through video parameter
  {type: 'CHANGE_VIDEO', payload: video}
);

export default changeVideo;
