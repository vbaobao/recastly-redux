import React from 'react';


class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
  }

  handleInputChange(e) {
    this.props.getYouTubeVideos(e.target.value);
    this.setState({
      value: e.target.value
    });
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input
          className="form-control"
          type="text"
          value={this.state.value}
          onChange={this.handleInputChange.bind(this)}
        />
        <button className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  }
}

export default Search;


// class DebounceSamples extends React.Component {
//   constructor(props) {
//     super(props);

//     // Method defined in constructor, alternatively could be in another lifecycle method
//     // like componentWillMount
//     this.search = _.debounce(e => {
//       console.log('Debounced Event:', e);
//     }, 1000);
//   }

//   // Define the method directly in your class
//   search = _.debounce((e) => {
//     console.log('Debounced Event:', e);
//   }, 1000)
// }