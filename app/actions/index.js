import Axios from 'axios';
import fetchJsonp from 'fetch-jsonp';
import jsonp from 'jsonp';

const API_KEY = '74062ad29c8de685e26ddb7362954a59';
const API_SECRET = '055a34063699da3d226aa30a44de0c9a';
const GOOGLE_API_KEY = "AIzaSyBCNh-skT2WNedb4nM14Zw_Rxa4fdWVeuA";
const GOOGLE_API_URL = `https://maps.googleapis.com/maps/api/geocode/json?&key=${GOOGLE_API_KEY}&address=`;

export function fetchRandomPet(){
  const URL = `https://api.petfinder.com/pet.getRandom?format=json&key=${API_KEY}&animal=dog&location=76155&output=basic`;
  const request = fetchJsonp(URL).then(response => response.json());
  //console.log("action creater ", request);
  return {
    type: 'RANDOMPETDATA',
    payload: request
  }

};

export function fetchPetList(location){
  return function(dispatch){
    if(isValidZipCode(location)){
      return fecthPetListFromAPI(location).then(data => dispatch(petListInfo(data)));
    }else{
      return Axios.get(GOOGLE_API_URL+location).then((response) => {
        const updatedLoc = getStateNCity(response);
        return fecthPetListFromAPI(updatedLoc).then(data => dispatch(petListInfo(data)));
      });
    }
  };
}

export function fetchPet(petId){
  return function(dispatch){
    return fecthPetFromAPI(petId).then(data => dispatch(petInfo(data)));
  };
}

function petInfo(data){
  return {
    type: 'PET',
    payload: data
  };
}

function petListInfo(data){
  return {
    type: 'PETLIST',
    payload: data
  };
}

function isValidZipCode(zipCode){
  return /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zipCode)
}

function fecthPetFromAPI(petId){
  const URL = `https://api.petfinder.com/pet.get?format=json&key=${API_KEY}&id=${petId}&output=basic`;
  return fetchJsonp(URL).then(response => response.json());
}

function fecthPetListFromAPI(location){
  const URL = `https://api.petfinder.com/pet.find?format=json&key=${API_KEY}&animal=dog&location=${location}&output=basic`;
  return fetchJsonp(URL).then(response => response.json());
}

function getStateNCity(response) {
  var results = response.data.results;
  var stateAndCity = {};
  if(response.data.status!="OK"){
    return nil;
  }
  for (var ac = 0; ac < results[0].address_components.length; ac++) {
    var component = results[0].address_components[ac];
    switch (component.types[0]) {
      case 'administrative_area_level_1':
        var state = component.short_name;
        stateAndCity['state'] = state;
        break;
      case 'locality':
        var city = component.long_name;
        stateAndCity['city'] = city;
        break;
    }
  }
  return stateAndCity.city+","+stateAndCity.state;
}
