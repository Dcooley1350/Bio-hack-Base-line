import  Constants from './../constants';
console.log(Constants);
const { constants } = Constants;

export default (state = 0, action) => {
    let newState;
    switch (action.type) {
        case constants.ADVANCE_TEST_SCRIPT: 
            newState = state++;
           return newState; 
        default:
            return state;
    }
};