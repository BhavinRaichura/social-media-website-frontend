import { UserActionTypes } from "../contants/action-type";

export const setLoginStatus = (status) => {
    return {
        type: UserActionTypes.SET_LOGIN_STATUS,
        payload: status
    }
}

export const getLoginStatus = () => {
    return {
        type: UserActionTypes.GET_LOGIN_STATUS
    }
}

export const setUserDetails = (details) => {
    return {
        type: UserActionTypes.SET_USER_DETAILS,
        payload: details
    }
}

export const getUserDetails = () => {
    return {
        type: UserActionTypes.GET_USER_DETAILS
    }
}

export const setUserPost = (poster) => {
    return {
        type: UserActionTypes.SET_USER_POST,
        payload: poster
    }
}

export const getUserPost = () => {
    return {
        type: UserActionTypes.SET_USER_POST
    }
}

export const getRequestedUser = () => {
    return {
        type: UserActionTypes.GET_REQUESTED_USER
    }
}

export const setRequestedUser = (users) => {
    return {
        type: UserActionTypes.SET_REQUESTED_USER,
        payload: users
    }
}

export const updateRequestedUserTrue = (userid) => {
    return {
        type: UserActionTypes.UPDATE_REQUESTED_USER_TRUE,
        payload: userid
    }
}

export const updateRequestedUserFalse = (userid) => {
    return {
        type: UserActionTypes.UPDATE_REQUESTED_USER_FALSE,
        payload: userid
    }
}