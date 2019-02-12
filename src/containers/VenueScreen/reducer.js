/* eslint-disable */
import * as actions from './constants';

const initialState = {
    isLoading: false,
    venueData: {},
    error: null,
}

// setup of page, including managing state of api.
const venuePageReducer = (state = initialState, action) => {
    switch(action.type) {
        case actions.VENUE_SCREEN_LOADING:
        console.log('reducer heard VENUE_SCREEN_LOADING');
            return {
                ...state,
                isLoading: true,
            }
        break;

        case actions.VENUE_SCREEN_LOADED:
        console.log('reducer heard VENUE_SCREEN_LOADED');
            return {
                ...state,
                isLoading: false,
            }
        break;

        case actions.VENUE_SCREEN_FAILED:
        console.log('reducer heard VENUE_SCREEN_FAILED');
            return {
                ...state,
                isLoading: false,
                error: action.error,
            }
        break;

        case actions.LOADING_ADDRESSES:
        console.log('reducer heard yep LOADING_ADDRESSES');
            return {
                ...state,
            }
        break;

        case actions.ADDRESS_API_FAIL:
        console.log('reducer heard yep ADDRESS_API_FAIL');
            return {
                ...state,
                error: action.error,
            }
        break;

        case actions.SAVE_VENUE_DATA:
        console.log('reducer heard yep SAVE_VENUE_DATA');
            return {
                ...state,
                venueData: action.venueData,
            }
        break;

        default:
            return state;
    }
}

export default venuePageReducer;