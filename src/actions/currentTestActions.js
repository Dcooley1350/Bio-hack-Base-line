import Constants from './../constants';
const { constants } = Constants;

export const newCurrentTest = (test) => ({
    type: constants.NEW_CURRENT_TEST,
    test
});

export const addMemoryTestResult = (result, id) => ({
    type: constants.ADD_MEMORY_TEST_RESULT,
    result,
    id
});

export const addReactionTimeResult = (result, id) => ({
    type: constants.ADD_REACTIONTIME_TEST_RESULT,
    result,
    id
});