/* eslint-disable */
import * as actions from './constants';

const initialState = {
    isLoading: false,
    error: null,
}


const confirmationPageReducer = (state = initialState, action) => {
    switch(action.type) {
        case actions.CONF_SCREEN_LOADING:
        console.log('reducer heard CONF_SCREEN_LOADING');
            return {
                ...state,
                isLoading: true,
            }
        break;

        case actions.CONF_SCREEN_LOADED:
        console.log('reducer heard CONF_SCREEN_LOADED');
            return {
                ...state,
                isLoading: false,
            }
        break;

        case actions.CONF_SCREEN_FALED:
        console.log('reducer heard CONF_SCREEN_FALED');
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

export default confirmationPageReducer;