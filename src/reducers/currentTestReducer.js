import  Constants from './../constants';
const { constants } = Constants;

const currentTestReducer = (state = '', action) => {
    let newState;
    switch(action.type){
        case constants.NEW_CURRENT_TEST:
            newState= Object.assign({}, action.test);
            return newState;

        case constants.ADD_REACTIONTIME_TEST_RESULT:
            
            let reactionTestObjectKey= "ReactionTimeTest"+ action.id;
            newState= Object.assign({},state, { [reactionTestObjectKey] : action.result
            });
            return newState;
            
            case constants.ADD_MEMORY_TEST_RESULT:
                let correctNumberString= '';
                let userInputNumbersString= '';
                console.log(action.correctNumbers)
                action.correctNumbers.forEach(num => {correctNumberString+= num + ', '});
                action.inputNumbers.forEach(num => {userInputNumbersString+=num+', '})
                let memoryTestObjectKey = "MemoryTest"+ action.id;
                newState = Object.assign({},state, { [memoryTestObjectKey] : {
                correctNumbers: action.correctNumbers,
                userInputNumbers: action.inputNumbers,
                correctNumberString: correctNumberString,
                userInputNumbersString: userInputNumbersString,
                bool: action.bool
                }});
            console.log(newState);
            return newState;

        case constants.RESET_CURRENT_TEST:
            newState= '';
            return newState;

        default:
            return state;
    }
}

export default currentTestReducer;