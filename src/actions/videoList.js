var changeVideoList = (videos) => (
  //TODO:  Return some action object to change the list of videos in VideoList.
  //TODO: Update state with new data from search.
  {type: 'CHANGE_VIDEO_LIST', videos: videos}
);

export default changeVideoList;