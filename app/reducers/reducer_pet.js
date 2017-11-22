import {getGender, getSize} from '../util/index.js';

export default (state={}, action) => {
  switch(action.type){
    case 'PET':
      const pet = action.payload.petfinder.pet;
      console.log(pet);
      const newPetState = {};
      newPetState[pet.id.$t] = {  'name': pet.name.$t,
                                 'sex': getGender(pet.sex.$t),
                                 'breed': !pet.breeds.breed.$t?pet.breeds.breed.reduce((final, temp) => final.$t + ' ' + temp.$t):pet.breeds.breed.$t,
                                 'age': pet.age.$t,
                                 'size': getSize(pet.size.$t),
                                 'images': pet.media.photos.photo.filter( photo => photo['@size'] === 'x').map(photo => photo.$t),
                                 'shelterId': pet.shelterId.$t,
                                 'location': pet.contact.city.$t+', '+pet.contact.state.$t,
                                 'description': pet.description.$t,
                              };

      //console.log(newState);
      return newPetState;
    default:
    return state;

  }
}
