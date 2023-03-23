import { UserActionTypes } from "../contants/action-type";

export const userFollowRequest = (state = [], action) => {
    switch (action.type) {
        case UserActionTypes.SET_REQUESTED_USER:
            state = action.payload
            return state
        case UserActionTypes.UPDATE_REQUESTED_USER_TRUE:
            const index = indexOfId(state, action.payload)
            if (index !== -1)
                state.pop(index)
            return state
        case UserActionTypes.GET_REQUESTED_USER:
            return state
        default:
            return state
    }
}


const indexOfId = (users, id) => {
    for (let i = 0; i < users.length; i++) {
        if (users[i].user_id === id) {
            return i;
        }
    }
    return -1;
}