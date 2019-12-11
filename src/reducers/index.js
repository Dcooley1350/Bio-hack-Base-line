import userReducer from './userReducer';
import testReducer from './testReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    currentUser: userReducer,
    testsById: testReducer,
})

export default rootReducer;

