import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchRandomPet} from '../actions/index.js';
import {isEmpty} from '../util/index.js';

class RandomPet extends Component{

  componentDidMount(){
    this.props.fetchRandomPet();
  }



  render(){
    const randomPet = this.props.randomPet;

    return (
      /* const desc = "You can fill out an adoption application online on our official website.\n\nAll of our dogs and cats are in foster homes and we have no paid staff. If you have questions concerning a specific animal, PLEASE fill out an application and the foster parent will be in touch. We will not arrange any home visits with any of our dogs and cats until your application is processed. Please understand our foster parents are precious to our 2nd Chance family; without them we cannot function, so we do our best to not burden them with multiple appointments. Our foster parents will choose their top 3 applications and arrange home visits with these applicants. The adopter will be chosen at that time. The process can take anywhere from a week to a month. We want to make sure our little furry ones are placed in their \"forever home\" and never have to go through a rehoming again!\n\nI'm your little velcro buddy. If you want someone to adore you and be by your side 24/7 I'm your man :)Please fill out an adoption application.\n\nPlease understand we do not adopt out dogs to families with children under the age of 5. We do not adopt dogs to renters. Some dogs will have fence requirements while others may not.\n\nA pet is a lifetime commitment. The dogs and cats in our system find themselves there, for the most part, because their humans did not have the same loyalty to them as they did to their owners. We do not take the adoption process lightly, and will do everything in our power to make sure the animal is placed correctly the first time around for your sake and theirs. Thank you for choosing to adopt not shop!".replace(/(\r\n|\n|\r)/gm,"<br/>");*/
      //
      // <div className='col-md-9 col-xs-12 pet-container' >
      //   <div className='row'>
      //     <div className='col-sm-6'>
      //       <img className='img-responsive pet-image col-sm-12' src="http://photos.petfinder.com/photos/pets/38424796/1/?bust=1497302220&width=500&-x.jpg"></img>
      //     </div>
      //     <div className='col-sm-5 pet-info'>
      //       <h3>Poppy Lancaster Info</h3>
      //       <ul>
      //         <li><b>Breed</b>: Pomeranian</li>
      //         <li><b>Sex</b>: Male</li>
      //         <li><b>Age</b>: Senior</li>
      //         <li><b>Size</b>: Small</li>
      //         <li><b>Location</b>: Elizabethtown, PA</li>
      //         <li><b>Shelter Pet Id</b>: 10475938-16-0101</li>
      //       </ul>
      //     </div>
      //   </div>
      //   <div className='row pet-description'>
      //     <div className='col-xs-12'>
      //       <h2>Poppy Lancaster Story</h2>
      //       <div>
      //         <p dangerouslySetInnerHTML={{__html: desc}}></p>
      //       </div>
      //     </div>
      //   </div>
      // </div>
      <div>
        {isEmpty(randomPet)?<p>Please wait while ur pet is loading...</p>:<RandomPetComponent data={randomPet}/>}
      </div>


    );
  }
}

function RandomPetComponent(props){
  const randomPet = props.data;
  console.log("Random Pet", randomPet);
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
    randomPet: state.RandomPetData
  }

}


export default connect(mapStateToProps, { fetchRandomPet })(RandomPet);
