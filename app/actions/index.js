import Axios from 'axios';
import fetchJsonp from 'fetch-jsonp';
import jsonp from 'jsonp';

const API_KEY = '74062ad29c8de685e26ddb7362954a59';
const API_SECRET = '055a34063699da3d226aa30a44de0c9a';

export function fetchRandomPet(){
  const URL = `https://api.petfinder.com/pet.getRandom?format=json&key=${API_KEY}&animal=dog&location=76155&output=basic`;
  const request = fetchJsonp(URL).then(response => response.json());
  //console.log("action creater ", request);
  return {
    type: 'RANDOMPETDATA',
    payload: request
  }

};

export function fetchPetList(zipCode){
  return function(dispatch){
    return fecthPetListFromAPI(zipCode).then(data => dispatch(petListInfo(data)));
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

function fecthPetFromAPI(petId){
  const URL = `https://api.petfinder.com/pet.get?format=json&key=${API_KEY}&id=${petId}&output=basic`;
  return fetchJsonp(URL).then(response => response.json());
}

function fecthPetListFromAPI(zipCode){
  const URL = `https://api.petfinder.com/pet.find?format=json&key=${API_KEY}&animal=dog&location=${zipCode}&output=basic`;
  return fetchJsonp(URL).then(response => response.json());
}
