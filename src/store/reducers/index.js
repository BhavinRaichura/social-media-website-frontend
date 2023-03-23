import { combineReducers } from 'redux'
import { userLoginStatus } from './userReducer'
import { userFollowRequest } from './userRequestReducer';

const reducers = combineReducers({ userLoginStatus, userFollowRequest });

export default reducers;