import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import queryString from 'query-string';
import {isEmpty} from '../util/index.js';

class PetInfo extends Component{
  constructor(props){
    super(props);
    this.state={petId: '', petInfo: {}};
  }

  componentDidMount(){
    var petId = queryString.parse(this.props.location.search).petId;
    const petListData = this.props.petListData;
    var petInfo = {};
    if(!isEmpty(petListData)&&!isEmpty(petListData[petId])){
      petInfo = petListData[petId];
    }
    this.setState({petId, petInfo});
  }
  render(){
    return (
      <div>
      <nav className='header'>
        <Link to="/" className='btn btn-default'><span className="glyphicon glyphicon-menu-left" aria-hidden="true"></span>Home</Link>
      </nav>
      <RandomPetComponent data={this.state.petInfo}/>
      </div>
    )
  }
}

function RandomPetComponent(props){
  const randomPet = props.data;
  return(
    <div className='col-md-9 col-xs-12 pet-container' >
      <div className='row'>
        <div className='col-sm-6'>
          <img className='img-responsive pet-image col-sm-12' src={randomPet.image}></img>
        </div>
        <div className='col-sm-5 pet-info'>
          <h3>{randomPet.name} Info</h3>
          <ul>
            <li><b>Breed</b>: {randomPet.breed}</li>
            <li><b>Sex</b>: {randomPet.sex}</li>
            <li><b>Age</b>: {randomPet.age}</li>
            <li><b>Size</b>: {randomPet.size}</li>
            <li><b>Location</b>: {randomPet.location}</li>
            <li><b>Shelter Pet Id</b>: {randomPet.shelterId}</li>
          </ul>
        </div>
      </div>
      <div className='row pet-description'>
        <div className='col-xs-12'>
          <h2>{randomPet.name} Story</h2>
          <div>
            <p dangerouslySetInnerHTML={{__html: randomPet.description}}></p>
          </div>
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

export default connect(mapStateToProps)(PetInfo);
