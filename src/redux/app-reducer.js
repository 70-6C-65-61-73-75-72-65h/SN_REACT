// import {authAPI} from "../api/api";
import { getAuthUserData } from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';


let initialState = {
    initialized: false,
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:

            return {
                ...state,
                initialized: true
            }

        default:
            return state;
    }
}

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS })

export const initializeApp = () => (dispatch) => {
    Promise.all([dispatch(getAuthUserData())])
    .then( resolve => {
        dispatch(initializedSuccess());
    });
    
    // authAPI.me()
    //     .then(response => {
    //         if (response.data.resultCode === 0) {
    //             let {id, login, email} = response.data.data;
    //             dispatch(initializedSuccess());
    //         }
    //     });
}


export default appReducer;