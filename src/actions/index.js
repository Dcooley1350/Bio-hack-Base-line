import Constants from './../constants';
import firebase from 'firebase';

const { constants } = Constants;
const { firebaseConfig } = Constants;

firebase.initializeApp(firebaseConfig);

const users = firebase.database().ref('users');
const tests = firebase.database().ref('tests');

export function sendNewUserToFireBase(_firstName, _lastName, _email, _password) {
    return () => users.push({
        firstName: _firstName,
        lastName: _lastName,
        email: _email,
        password: _password,
    })
}

export function sendTestToFireBase(
    _Date,
    _Time,
    _ctrlCondition,
    _expCondition,
    _expConditionNotes,
    _ctrlConditionNotes,
    _reactionTimeTest1,
    _reactionTimeTest2,
    _reactionTimeTest3,
    _reactionTimeTest4,
    _reactionTimeTest5,
    _memoryTest1,
    _memoryTest2,
    _memoryTest3,
    _memoryTest4,
    _memoryTest5,
    _memoryTest6,
    _memoryTest7,
    _memoryTest8
            ){
    return () => tests.push({
        date: _Date,
        time: _Time,
        ctrlCondition: _ctrlCondition,
        ctrlConditionNotes: _ctrlConditionNotes,
        expCondition: _expCondition,
        expConditionNotes: _expConditionNotes,
        reactionTimeTest1: _reactionTimeTest1,
        reactionTimeTest2: _reactionTimeTest2,
        reactionTimeTest3: _reactionTimeTest3,
        reactionTimeTest4: _reactionTimeTest4,
        reactionTimeTest5: _reactionTimeTest5,
        memoryTest1: _memoryTest1,
        memoryTest2: _memoryTest2,
        memoryTest3: _memoryTest3,
        memoryTest4: _memoryTest4,
        memoryTest5: _memoryTest5,
        memoryTest6: _memoryTest6,
        memoryTest7: _memoryTest7,
        memoryTest8: _memoryTest8,
    })
}

export function watchFirebaseTestsRef() {
    return function(dispatch) {
        tests.on('child_added', data => {
            console.log(data.val());
        })
    }
}


export const newCurrentTest = (test) => ({
    type: constants.NEW_CURRENT_TEST,
    test
})