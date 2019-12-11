import userReducer from './userReducer';
import testReducer from './testReducer';
import { combineReducers } from 'redux';
import currentTestReducer from './currentTestReducer';

const rootReducer = combineReducers({
    currentUser: userReducer,
    testsById: testReducer,
    currentTest: currentTestReducer,
})

export default rootReducer;

