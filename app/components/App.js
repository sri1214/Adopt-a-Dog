import React, {Component} from 'react';
import {connect} from 'react-redux';
import SearchBar from './SearchBar.js';

class App extends Component{
  isEmpty(obj){
    for (var p in obj) {
      if (obj.hasOwnProperty(p)) {
        return false;
      }
    }
    return true;
  }

  render (){
    const petListData = this.props.petListData;
    return (
      <div>
        <SearchBar/>
        {!this.isEmpty(petListData)&& <PetList petListData={petListData} />}
      </div>
    )
  }
}

function PetList(props){
  const petList = props.petListData;
  const petListKeys = Object.keys(petList);
  const petRowArray = [];
  for(var i=0;i<petListKeys.length;i=i+3){
    petRowArray.push(i);
  }

  return(
    <div>
      {petRowArray.map(startPos => <PetRow key={startPos} petListKeys={petListKeys} petList={petList} startPos={startPos}/>)}
    </div>
  )
}

function PetRow(props){
  const petListKeys = props.petListKeys;
  const petList = props.petList;
  const startPos = props.startPos;
  return (
    <div className="row">
    { petListKeys.slice(startPos, startPos+3).map(petId => <Pet key={petId} petData={petList[petId]} />) }
    </div>
  )
}

function Pet(props){
  const petData = props.petData;
  return (
    <div className="col-sm-6 col-md-4">
      <div className="thumbnail">
        <img className = "pet-list-image" src={petData.image} alt={petData.name} ></img>
        <div className="caption">
          <h3>{petData.name}</h3>
          <p>Male Young Shitzu</p>
          <p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#" className="btn btn-default" role="button">Button</a></p>
        </div>
      </div>
    </div>
  )
}
function mapStateToProps(state){
  return {
    petListData: state.PetListData
  }
}
export default connect(mapStateToProps)(App);
