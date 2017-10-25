export default (state={}, action) => {
  switch(action.type){
    case 'PETLIST':
      const pets = action.payload.petfinder.pets.pet;
      console.log(pets);
      const newState = {};
      pets.map((pet) => {
        newState[pet.id.$t] = {  'name': pet.name.$t,
                                 'sex': pet.sex.$t,
                                 'breed': !pet.breeds.breed.$t?pet.breeds.breed.reduce((final, temp) => final.$t + ' ' + temp.$t):pet.breeds.breed.$t,
                                 'age': pet.age.$t,
                                 'size': pet.size.$t,
                                 'image': pet.media.photos.photo.filter( photo => photo['@size'] === 'x')[0].$t,
                              };
        return newState;
      });
      return newState;
    default:
    return state;
  }
}
