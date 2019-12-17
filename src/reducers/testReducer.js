import  Constants from './../constants';
const { constants } = Constants;

const initState =  {
    tests: [
        {id: 1, testVar: 'Sleep', description: 'VERY COOL DATA TEST'},
        {id: 2, testVar: 'Food', description: 'VERY Hungry DATA TEST'},
        {id: 3, testVar: 'LSD', description: 'VERY Trippy DATA TEST'}
    ]
}

const testReducer = (state = initState, action) => {
    let newState;
    switch(action.type){
        case constants.NEW_TEST:
            return state
        case constants.RECIEVE_TESTS_FROM_FIREBASE:
            let allTests = action.Tests;
            newState = Object.assign({}, state, allTests);
            return newState;
            default:
            return state;
    }
}

export default testReducer;