import Constants from './../constants';
const { constants } = Constants;

export const advanceTestScript = () => ({
    type: constants.ADVANCE_TEST_SCRIPT,
});

export const restartTestScript = () => ({
    type: constants.RESTART_TEST_SCRIPT,
})