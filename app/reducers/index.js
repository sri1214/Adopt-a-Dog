import { combineReducers } from 'redux';

import RandomPetReducer from './reducer_random_pet.js'
const rootReducer = combineReducers({RandomPetData: RandomPetReducer});

export default rootReducer;
