import { connect } from 'react-redux';
import Search from './../components/Search.js';
import handleVideoSearch from '../actions/search.js';
import { bindActionCreators } from 'redux';

const mapDispatchToProps = (dispatch) => {
  return { handleSearchInputChange: () => dispatch({type: 'SEARCH'})};
}

var SearchContainer = connect(null, mapDispatchToProps)(Search)
export default SearchContainer;