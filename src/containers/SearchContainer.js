import { connect } from 'react-redux';
import Search from './../components/Search.js';
import handleVideoSearch from '../actions/search.js';
import { bindActionCreators } from 'redux'

var SearchContainer = (props) => {

  return <Search handleSearchInputChange={props.handleSearchInputChange}/>
};

// function mapStateToProps(state) {
//   return { videoList: state.videoList};
// }

const mapDispatchToProps = (dispatch) => {
  return { handleSearchInputChange: () => dispatch({type: 'SEARCH'})};
}

//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.

export default connect(null, mapDispatchToProps)(SearchContainer);