import Axios from 'axios';
import fetchJsonp from 'fetch-jsonp';
import jsonp from 'jsonp';

const API_KEY = '74062ad29c8de685e26ddb7362954a59';
const API_SECRET = '055a34063699da3d226aa30a44de0c9a';
const URL = `http://api.petfinder.com/pet.getRandom?format=json&key=${API_KEY}&animal=dog&location=76155&output=basic`;

export default function(){
  const request = fetchJsonp(URL).then(response => response.json());
  console.log("action creater ", request);
  return {
    type: 'RANDOMPETDATA',
    payload: request
  }

}
