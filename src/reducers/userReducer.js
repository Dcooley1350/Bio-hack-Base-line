import c from './../constants';

const userReducer = (state = {}, action) => {
    switch(action.type){
        case c.NEW_USER:
            return state;
        default:
            return state;
    }
}

export default userReducer;