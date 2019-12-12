import userReducer from './userReducer';
import testReducer from './testReducer';
import { combineReducers } from 'redux';
import currentTestReducer from './currentTestReducer';
import testScriptReducer from './testScriptReducer';

const rootReducer = combineReducers({
    currentUser: userReducer,
    testsById: testReducer,
    currentTest: currentTestReducer,
    testScriptPosition: testScriptReducer,
})

export default rootReducer;

