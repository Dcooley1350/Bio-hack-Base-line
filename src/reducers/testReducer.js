import c from './../constants';

const testReducer = (state = {}, action) => {
    switch(action.type){
        case c.NEW_TEST :
            return state
            default:
            return state;
    }
}

export default testReducer;