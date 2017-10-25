import Axios from 'axios';
import fetchJsonp from 'fetch-jsonp';
import jsonp from 'jsonp';

const API_KEY = '74062ad29c8de685e26ddb7362954a59';
const API_SECRET = '055a34063699da3d226aa30a44de0c9a';

export function fetchRandomPet(){
  const URL = `https://api.petfinder.com/pet.getRandom?format=json&key=${API_KEY}&animal=dog&location=76155&output=basic`;
  const request = fetchJsonp(URL).then(response => response.json());
  console.log("action creater ", request);
  return {
    type: 'RANDOMPETDATA',
    payload: request
  }

};

export function fetchPetList(zipCode){
  const URL = `https://api.petfinder.com/pet.find?format=json&key=${API_KEY}&animal=dog&location=${zipCode}&output=basic`;
  const request = fetchJsonp(URL).then(response => response.json());
  console.log("action creater ", request);
  return {
    type: 'PETLIST',
    payload: request
  }
}
