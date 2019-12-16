import Constants from './../constants';
const { constants } = Constants;

const userReducer = (state = {}, action) => {
    let newState;
    switch(action.type){
        case constants.NEW_USER:
        if(action.user != null) {
            let userInfo = { 
                email: action.user['email'],
                uid: action.user['uid']
            }
                newState = Object.assign({}, state,{ ...userInfo});
        }
        else {
            newState = Object.assign({});
        }
            return newState;
        default:
            return state;
    }
}

export default userReducer;