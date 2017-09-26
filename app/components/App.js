import React, {Component} from 'react';
import {connect} from 'react-redux';
import fetchRandomPet from '../actions/index.js';

class App extends Component{

  componentDidMount(){
    this.props.fetchRandomPet();
  }
  render(){
    return <div>Adopt a Dog</div>
  }
}


export default connect(null, { fetchRandomPet })(App);
