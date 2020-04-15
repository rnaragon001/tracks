import { AsyncStorage } from 'react-native';

import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload };
        case 'signup':
            return { errorMessage: '', token: action.payload };
        default:
            return state;
    }
}

//QUICK EXAMPLE
// const add = (a, b) => {
//     return a + b;
// }

// const add = (a, b) => a + b;

const signup = (dispatch) => async ({ email, password }) => {
    // make api request to sign up with that email and password

    // if we sign up, modify our state, and say that we are authenticated

    // if signing up fails, we probably need to reflect an error message somewhere

    try {
        const response = await trackerApi.post('./signup', { email, password });
        // console.log(response.data);
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: 'signup', payload: response.data.token});

        navigate('TrackList');
    } catch (err) {
        // console.log(err.response.data);
        dispatch({ type: 'add_error', payload: 'Something went wrong with sign up.'})
    }
}


const signin = (dispatch) => {
    return ({ email, password }) => {
        // Try to sign in

        // Handle success by updating state

        // Handle failure by showing error message
    }
}

const signout = (dispatch) => {
    return () => {
        // somehow sign out
    }
}

export const { Provider, Context } = createDataContext(
    authReducer,
    { signup, signin, signout },
    { token: null, errorMessage: '' }
)