import { USER_AUTHENTICATE, USER_LOGOUT } from '../../constants';

const initialState = {
    user: {}
};

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_AUTHENTICATE:
            return {
                ...state,
                user: action.payload
            };
        case USER_LOGOUT:
            return {
                ...state,
                user: action.payload
            };
        default:
            return state;
    }
}
export default AuthReducer;