import  Constants from './../constants';
const { constants } = Constants;

const currentTestReducer = (state = '', action) => {
    let newState;
    switch(action.type){
        case constants.NEW_CURRENT_TEST:
            newState= Object.assign({}, action.test);
            return newState;

        case constants.ADD_REACTIONTIME_TEST_RESULT:
            let reactiionTestObjectKey= "ReactionTimeTest"+ action.id;
            newState= Object.assign({},state, { [reactiionTestObjectKey] : action.result})
            return newState;

        case constants.ADD_MEMORY_TEST_RESULT:
            let memoryTestObjectKey = "MemoryTest"+ action.id;
            newState = Object.assign({},state, { [memoryTestObjectKey] : action.result})
            return newState;

        case constants.RESET_CURRENT_TEST:
            newState= '';
            return newState;

        default:
            return state;
    }
}

export default currentTestReducer;