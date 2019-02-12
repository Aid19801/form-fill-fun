
/* eslint-disable */
import { combineReducers } from 'redux';
import activityPageReducer from '../containers/ActivityScreen/reducer';
import confirmationPageReducer from '../containers/ConfirmationScreen/reducer';
import venuePageReducer from '../containers/VenueScreen/reducer';

import * as actions from './constants';

const initialState = {
    isLoading: false,
    error: null,
}

const appStateReducer = (state = initialState, action) => {
    switch(action.type) {
        case actions.APP_LOADING:
        console.log('reducer heard actions.APP_LOADING');
            return {
                ...state,
                isLoading: true,
            }
        break;

        case actions.APP_LOADED:
        console.log('reducer heard actions.APP_LOADED');
            return {
                ...state,
                isLoading: false,
            }
        break;
        case actions.APP_FAILED:
        console.log('reducer heard actions.APP_FAILED');
            return {
                ...state,
                isLoading: false,
                error: action.error,
            }
        break;

        default:
            return state;
    }
}

const RootReducer = combineReducers({
    appState: appStateReducer,
    activityPage: activityPageReducer,
    confirmationPage: confirmationPageReducer,
    venuePage: venuePageReducer,
});

export default RootReducer;