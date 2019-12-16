import Constants from './../constants';
const { constants } = Constants;


export const sendUserToRedux = (user) => {
    return {
        type: constants.NEW_USER,
        user
    };

}