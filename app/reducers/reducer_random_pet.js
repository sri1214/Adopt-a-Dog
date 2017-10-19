export default (state={}, action) => {
  switch (action.type) {
    case 'RANDOMPETDATA':
      const pet = action.payload.petfinder.pet;
      console.log('reducer', pet);
      var newState = { 'name': pet.name.$t,
                       'sex': pet.sex.$t,
                       'shelterId': pet.shelterId.$t,
                       'breed': !pet.breeds.breed.$t?pet.breeds.breed.reduce((final, temp) => final.$t + ' ' + temp.$t):pet.breeds.breed.$t,
                       'age': pet.age.$t,
                       'size': pet.size.$t,
                       'location': pet.contact.city.$t+', '+pet.contact.state.$t,
                       'image': pet.media.photos.photo.filter( photo => photo['@size'] === 'x')[0].$t,
                       'description': pet.description.$t,
                      'id': pet.id.$t
                     };
      console.log('reducer', newState);
      return newState;
    default:
      return state;
  }
}
