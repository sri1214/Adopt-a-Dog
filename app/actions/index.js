import Axios from 'axios';

const API_KEY = '74062ad29c8de685e26ddb7362954a59';
const URL = `http://api.petfinder.com/getRandom?format=json&key=${API_KEY}&animal=dog&location=76155&callback=jQuery110206092635430395603_1391456463806`;

export default function(){
  const request = Axios.get(URL);
  return {
    type: 'RANDOMPETID',
    payload: request
  }
}
