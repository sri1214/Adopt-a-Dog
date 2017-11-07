import { combineReducers } from 'redux';

import RandomPetReducer from './reducer_random_pet.js';
import PetListReducer from './reducer_pet_list.js';
import PetReducer from './reducer_pet.js';

const rootReducer = combineReducers({RandomPetData: RandomPetReducer, PetListData: PetListReducer, PetData: PetReducer});

export default rootReducer;
