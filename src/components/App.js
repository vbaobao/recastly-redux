import React from 'react';
import VideoListContainer from '../containers/VideoListContainer.js';
import VideoPlayerContainer from '../containers/VideoPlayerContainer.js';
import SearchContainer from '../containers/SearchContainer.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      currentVideo: null
    };
    this.getYouTubeVideos = this.getYouTubeVideos.bind(this);
  }

  componentDidMount() {
    this.getYouTubeVideos('react tutorials');
  }

  // This may need handler
  handleVideoListEntryTitleClick(video) {
    this.setState({currentVideo: video});
  }

  // This may need handler (uncertain, since searchYouTube)
  getYouTubeVideos(query) {
    var options = {
      key: this.props.API_KEY,
      query: query
    };

    // This may need handler (searchYouTube)
    this.props.searchYouTube(options, (videos) =>
      this.setState({
        videos: videos,
        currentVideo: videos[0]
      })
    );
  }

  // handleSearchInputChange (e) {
  //   this.getYouTubeVideos(e.target.value);
  //   this.setState({
  //     value: e.target.value
  //   });
  // }

  //TODO: swap out the React components below for the container components
  //  you wrote in the 'containers' directory.
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 col-md-offset-3">
            <SearchContainer />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayerContainer />
          </div>
          <div className="col-md-5">
            <VideoListContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
