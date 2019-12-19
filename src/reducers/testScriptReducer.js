import  Constants from './../constants';
const { constants } = Constants;
//SET THIS BACK TO 0 WHEN TESTING IS OVER!
export default (state = 0, action) => {
    let newState;
    switch (action.type) {
        case constants.ADVANCE_TEST_SCRIPT:
            newState = ++state;
           return newState;
        case constants.RESTART_TEST_SCRIPT:
            newState= 0;
            return newState;
        default:
            return state;
    }
};