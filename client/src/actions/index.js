//Action Constant Names
//Actions are payloads of information that send data from 
//your applicatin to your store.
//Actions are plain JavaScript objects. Actions must have a type
//property that indicates the type of action being performed.
const SELECT_BAND = 'SELECT_BAND';


export function selectBand(band){
	//select and is an ActionCreator, it needs to return an action
	//which is an object that must have a type property
	console.log("You have selected:", band.name);
	return {
		type: SELECT_BAND,
		payload: band
	};
};