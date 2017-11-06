import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import SearchBar from './SearchBar.js';
import {isEmpty} from '../util/index.js';

class App extends Component{


  render (){
    const petListData = this.props.petListData;
    return (
      <div>
        {isEmpty(petListData) &&
          <div className="jumbotron">
            <h1>Adopt-a-Dog</h1>
            <h3>Please enter your location to look for the dogs that are available for adoption</h3>
          </div>
        }
        <SearchBar/>
        {!isEmpty(petListData)&& <PetList petListData={petListData} />}
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
    { petListKeys.slice(startPos, startPos+3).map(petId => <Pet key={petId} petId={petId} petData={petList[petId]} />) }
    </div>
  )
}

function Pet(props){
  const petData = props.petData;
  const petId=props.petId;
  return (
    <div className="col-sm-6 col-md-4">
      <div className="thumbnail">
        <img className = "pet-list-image" src={petData.images[0]} alt={petData.name} ></img>
        <div className="caption">
          <h3>{petData.name}</h3>
          <p>{petData.sex} {petData.age} {petData.breed}</p>
          <p><Link to={{pathname:"/petInfo", search: `?petId=${petId}`}} className="btn btn-primary">More Info</Link></p>
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
