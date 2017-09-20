import { combineReducers } from 'redux';
// import BandsReducer from './reducer_bands'; //added
// import SelectedBand from './reducer_selectedband'; //added
import { reducer as formReducer } from 'redux-form'; //added

const rootReducer = combineReducers({
	form: formReducer
});

export default rootReducer;