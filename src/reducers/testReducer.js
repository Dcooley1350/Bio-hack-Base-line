import c from './../constants';

const initState =  {
    tests: [
        {id: 1, testVar: 'Sleep', description: 'VERY COOL DATA TEST'},
        {id: 2, testVar: 'Food', description: 'VERY Hungry DATA TEST'},
        {id: 3, testVar: 'LSD', description: 'VERY Trippy DATA TEST'}
    ]
}

const testReducer = (state = initState, action) => {
    switch(action.type){
        case c.NEW_TEST :
            return state
            default:
            return state;
    }
}

export default testReducer;