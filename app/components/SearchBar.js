import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPetList} from '../actions/index.js';


class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state = {searchValue: ''};
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  onInputChange(event){
    this.setState({searchValue: event.target.value});
  }

  onFormSubmit(event){
    event.preventDefault();
    this.props.fetchPetList(this.state.searchValue);
    this.setState({searchValue: ''});
  }
  render(){
    return (
      <form className="search-bar" onSubmit={this.onFormSubmit}>
        <input type="text" className="form-control search-bar-input" placeholder="Enter a valid U.S. city or zip code" value={this.state.searchValue} onChange={this.onInputChange}/>
        <button type="submit" className="btn btn-default button"  aria-label="Left Align">
          <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
        </button>
      </form>
    )
  }
}

export default connect(null, {fetchPetList})(SearchBar);
