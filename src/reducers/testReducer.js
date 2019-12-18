import  Constants from './../constants';
const { constants } = Constants;

// const initState =  {
//     tests: [
//         {id: 1, testVar: 'Sleep', description: 'VERY COOL DATA TEST'},
//         {id: 2, testVar: 'Food', description: 'VERY Hungry DATA TEST'},
//         {id: 3, testVar: 'LSD', description: 'VERY Trippy DATA TEST'}
//     ]
// }

const testReducer = (state = {}, action) => {
    let newState;
    switch(action.type){
        case constants.NEW_TEST:
            return state
        case constants.SEND_TESTS_TO_REDUX:
            let allTests = action.tests;
            console.log(allTests);
            newState = Object.assign({}, state,{...allTests});
            console.log(newState);
            return allTests;
            default:
            return state;
    }
}

export default testReducer;