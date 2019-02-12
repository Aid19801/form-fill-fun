/* eslint-disable */
import * as actions from './constants';

const initialState = {
    isLoading: false,
    activityData: {},
    error: null,
}


// setup of page, including managing state of api.
const activityPageReducer = (state = initialState, action) => {
    switch(action.type) {
        case actions.ACTIVITY_SCREEN_LOADING:
        console.log('reducer heard ACTIVITY_SCREEN_LOADING');
            return {
                ...state,
                isLoading: true,
            }
        break;

        case actions.ACTIVITY_SCREEN_LOADED:
        console.log('reducer heard ACTIVITY_SCREEN_LOADED');
            return {
                ...state,
                isLoading: false,
            }
        break;

        case actions.ACTIVITY_SCREEN_FAILED:
        console.log('reducer heard ACTIVITY_SCREEN_FAILED');
            return {
                ...state,
                isLoading: false,
                error: action.error,
            }
        break;

        case actions.SAVE_ACTIVITY_DATA:
        console.log('reducer heard yep SAVE_ACTIVITY_DATA');
            return {
                ...state,
                activityData: action.activityData,
            }
        break;

        default:
            return state;
    }
}

export default activityPageReducer;