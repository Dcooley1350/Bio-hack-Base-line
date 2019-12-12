import  Constants from './../constants';
console.log(Constants);
const { constants } = Constants;

const currentTestReducer = (state = {}, action) => {
    let newState;
    switch(action.type){
        case constants.NEW_CURRENT_TEST:
            newState= Object.assign({}, action.test);
            return newState;

            default:
            return state;
    }
}

export default currentTestReducer;