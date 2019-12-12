import Constants from './../constants';
const { constants } = Constants;

export const newCurrentTest = (test) => ({
    type: constants.NEW_CURRENT_TEST,
    test
})