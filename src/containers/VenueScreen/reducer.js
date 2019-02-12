/* eslint-disable */
import * as actions from './constants';

const initialState = {
    isLoading: false,
    venueData: {},
    inputtingData: false,
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
        console.log('reducer heard LOADING_ADDRESSES');
            return {
                ...state,
            }
        break;

        case actions.ADDRESS_API_FAIL:
        console.log('reducer heard ADDRESS_API_FAIL');
            return {
                ...state,
                error: action.error,
            }
        break;

        case actions.USER_INPUTTING_DATA:
        console.log('reducer heard USER_INPUTTING_DATA');
            return {
                ...state,
                inputtingData: true,
            }
        break;

        case actions.SAVE_VENUE_DATA:
        console.log('reducer heard SAVE_VENUE_DATA');
            return {
                ...state,
                inputtingData: false,
                venueData: action.venueData,
            }
        break;

        default:
            return state;
    }
}

export default venuePageReducer;