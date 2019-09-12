// Action Types
export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";
// Action Creators
export const addFeature = feature => {
	console.log("MADE IT TO THE ADD FEATURE FUNCITON")
	return {type: ADD_FEATURE, payload: feature}
}

export const removeItem = feature => {
	console.log("MADE IT TO THE REMOVE FEATURE FUNCTION action", feature)
	return {type: REMOVE_FEATURE, payload: feature}
}