import { UserActionTypes } from "../contants/action-type";


export const userLoginStatus = (state = { isLogin: false }, action) => {
    switch (action.type) {
        case UserActionTypes.SET_LOGIN_STATUS:
            state.isLogin = action.payload;
            return state;
        default:
            return state;
    }
}