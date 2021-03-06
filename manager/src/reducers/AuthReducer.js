import {EMAIL_CHANGED, LOGIN_USER, LOGIN_USER_FAIL, LOGIN_USER_SUCCESS, PASSWORD_CHANGED} from '../actions/types'

const INITIAL_STATE = {
    email: 'test@test.com',
    password: 'password',
    loading: false,
    error: '',
    user: null
};

export default (state = INITIAL_STATE, action) => {
    console.log(action);

    switch (action.type) {
        case EMAIL_CHANGED:
            return {...state, email: action.payload};
        case PASSWORD_CHANGED:
            return {...state, password: action.payload}
        case LOGIN_USER_SUCCESS:
            return {...state, ...INITIAL_STATE, user: action.payload}
        case LOGIN_USER_FAIL:
            return {...state, error: 'Authentication Failed', password: '', loading: false}
        case LOGIN_USER:
            return {...state, loading: true, error: ''}
        default:
            return state;
    }
};
