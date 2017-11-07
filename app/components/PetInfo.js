import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import queryString from 'query-string';
import {isEmpty} from '../util/index.js';
import Slider from 'react-slick';
import {fetchPet} from '../actions/index.js';

class PetInfo extends Component{
  constructor(props){
    super(props);
    this.state={petId: '', petInfo: {}};
  }

  componentDidMount(){
    var petId = queryString.parse(this.props.location.search).petId;
    this.setState({petId});
    const petListData = this.props.petListData;
    var petInfo = {};
    if(!isEmpty(petListData)&&!isEmpty(petListData[petId])){
      petInfo = petListData[petId];
    }
    isEmpty(petInfo)?this.props.fetchPet(petId):this.setState({petInfo});
  }

  componentWillReceiveProps(nextProps){
    const petId = this.state.petId;
    const petInfo = nextProps.petData[petId];
    this.setState({petInfo});
  }

  render(){

    // <RandomPetComponentMockUp/>
    return (
      <div>
        <Header />
        {!isEmpty(this.state.petInfo) && <PetComponent data={this.state.petInfo}/>}
      </div>
    )
  }
}

function Header(){
  return (
    <nav className='header'>
      <Link to="/" className='btn btn-default'><span className="glyphicon glyphicon-menu-left" aria-hidden="true"></span>Home</Link>
    </nav>
  );
}

function PetComponent(props){
  const pet = props.data;
  return(
    <div className='pet-container' >
      <div className='row'>
        <ImageSlider images={pet.images} />
        <div className='col-sm-1'></div>
        <PetDetails pet={pet} />
      </div>
      <div >
        <div >
          <h2>{pet.name} Story</h2>
          <div className='pet-description'>
            <p dangerouslySetInnerHTML={{__html: pet.description}}></p>
          </div>
        </div>
      </div>
    </div>

  )
}

function PetDetails(props){
  const pet = props.pet;
  return (
    <div className='col-sm-5 pet-info'>
      <h3>{pet.name} Info</h3>
      <ul>
        <li><b>Breed</b>: {pet.breed}</li>
        <li><b>Sex</b>: {pet.sex}</li>
        <li><b>Age</b>: {pet.age}</li>
        <li><b>Size</b>: {pet.size}</li>
        <li><b>Location</b>: {pet.location}</li>
        <li><b>Shelter Pet Id</b>: {pet.shelterId}</li>
      </ul>
    </div>
  );
}

function ImageSlider(props){
  const images = props.images;
  const settings = {
     dots: true,
     adaptiveHeight: true,
     swipeToSlide: true
   };
   return (
    <div className='col-sm-4'>
      <Slider {...settings}>
          {images.map((image, index) => <div key={index}><img className='img-responsive pet-image' src={image} /></div>)}
      </Slider>
    </div>
   )
}

function RandomPetComponentMockUp(){
   const desc = "You can fill out an adoption application online on our official website.\n\nAll of our dogs and cats are in foster homes and we have no paid staff. If you have questions concerning a specific animal, PLEASE fill out an application and the foster parent will be in touch. We will not arrange any home visits with any of our dogs and cats until your application is processed. Please understand our foster parents are precious to our 2nd Chance family; without them we cannot function, so we do our best to not burden them with multiple appointments. Our foster parents will choose their top 3 applications and arrange home visits with these applicants. The adopter will be chosen at that time. The process can take anywhere from a week to a month. We want to make sure our little furry ones are placed in their \"forever home\" and never have to go through a rehoming again!\n\nI'm your little velcro buddy. If you want someone to adore you and be by your side 24/7 I'm your man :)Please fill out an adoption application.\n\nPlease understand we do not adopt out dogs to families with children under the age of 5. We do not adopt dogs to renters. Some dogs will have fence requirements while others may not.\n\nA pet is a lifetime commitment. The dogs and cats in our system find themselves there, for the most part, because their humans did not have the same loyalty to them as they did to their owners. We do not take the adoption process lightly, and will do everything in our power to make sure the animal is placed correctly the first time around for your sake and theirs. Thank you for choosing to adopt not shop!".replace(/(\r\n|\n|\r)/gm,"<br/>");

   const settings = {
    	dots: true,
      adaptiveHeight: true,
      swipeToSlide: true
    }

  return (
    <div className='pet-container' >
      <div className='row'>
        <div className='col-sm-4'>
          <Slider {...settings}>
            <div><img className='img-responsive pet-image' src='http://photos.petfinder.com/photos/pets/38424796/1/?bust=1497302220&width=500&-x.jpg' /></div>
            <div><img className='img-responsive pet-image' src='http://photos.petfinder.com/photos/pets/38424796/2/?bust=1497302221&width=500&-x.jpg' /></div>
            <div><img className='img-responsive pet-image' src='http://photos.petfinder.com/photos/pets/38424796/3/?bust=1497302220&width=500&-x.jpg' /></div>
          </Slider>
        </div>
        <div className='col-sm-1'></div>
        <div className='col-sm-5 pet-info'>
          <h3>Poppy Lancaster Info</h3>
          <ul>
            <li><b>Breed</b>: Pomeranian</li>
            <li><b>Sex</b>: Male</li>
            <li><b>Age</b>: Senior</li>
            <li><b>Size</b>: Small</li>
            <li><b>Location</b>: Elizabethtown, PA</li>
            <li><b>Shelter Pet Id</b>: 10475938-16-0101</li>
          </ul>
        </div>
      </div>
      <div >
        <div >
          <h2>Poppy Lancaster Story</h2>
          <div className='pet-description'>
            <p dangerouslySetInnerHTML={{__html: desc}}></p>
          </div>
        </div>
      </div>
    </div>
)
}

function mapStateToProps(state){
  return {
    petListData: state.PetListData,
    petData: state.PetData
  }
}

export default connect(mapStateToProps, {fetchPet})(PetInfo);
