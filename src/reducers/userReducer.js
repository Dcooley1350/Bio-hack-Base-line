import Constants from './../constants';
const { constants } = Constants;
let initState = {
    userEmail: null,
    uid: null
}
const userReducer = (state = initState, action) => {
    let newState;
    let userInfo;
    switch(action.type){
        case constants.NEW_USER:
        if(action.user != null) {
            userInfo = { 
                email: action.user['email'],
                uid: action.user['uid']
            }
                newState = Object.assign({}, state,{ ...userInfo});
        }
        else {
            userInfo = {
                email: null,
                uid: null
            }
            newState = Object.assign({}, state, {...userInfo});
        }
            return newState;
        default:
            return state;
    }
}

export default userReducer;