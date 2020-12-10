// import { connect } from 'react-redux';
// import Search from './../components/Search.js';
// import handleVideoSearch from '../actions/search.js';

// var SearchContainer = (state) => {
//   function mapStateToProps(state) {
//     return { videoList: state.videoList};
//   }

//   function mapDispatchToProps(dispatch) {
//     return { action: bindActionCreators(handleVideoSearch, dispatch)};
//   }

//   return connect(mapStateToProps, mapDispatchToProps)(Search);
// };

// //TODO: define a SearchContainer component which will hook up your action
// // dispatchers with your search component props.
// //HINT: use react-redux 'connect' method to generate a container component from
// //state and dispatch mappings.

// export default SearchContainer;



//App => Search

//App => SearchContainer (connect) => Search

//App.js
// SearchContainer(Search)
//connect()(Search)

import { connect } from 'react-redux';
import Search from './../components/Search.js';
import handleVideoSearch from '../actions/search.js';
import { bindActionCreators } from 'redux'

var SearchContainer = (props) => {

  return <Search handleSearchInputChange={props.handleSearchInputChange}/>
};
function mapStateToProps(state) {
  return { videoList: state.videoList};
}

function mapDispatchToProps(dispatch) {
  return { action: bindActionCreators(handleVideoSearch, dispatch)};
}

//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);