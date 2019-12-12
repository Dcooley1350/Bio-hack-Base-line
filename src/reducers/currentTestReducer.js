import c from './../constants';

const currentTestReducer = (state = {}, action) => {
    let newState;
    switch(action.type){
        case c.NEW_CURRENT_TEST:
            newState= Object.assign({}, state, action.currentTest);
            return newState;

            default:
            return state;
    }
}

export default currentTestReducer;