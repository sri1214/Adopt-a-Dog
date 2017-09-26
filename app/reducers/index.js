import { combineReducers } from 'redux';

import RandomPetReducer from './reducer_random_pet.js'
const rootReducer = combineReducers({RandomPetReducer});

export default rootReducer;
