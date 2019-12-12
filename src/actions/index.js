import constants from './../constants';
const { types } = constants;

import firebase from 'firebase';
const { firebaseConfig } = constants;

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

export function sendTestToFireBase(_expCondition, _expConditionNotes, _Time, _Date, _ctrlConditions, _ControlConditionNotes){
    return () => tests.push({
        expCondition: _expCondition,
        expConditionNotes: _expConditionNotes,
        time: _Time,
        date: _Date,
        ctrlConditions: _ctrlConditions,
        ctrlConditionsNotes: _ctrlConditionsNotes,
    })
}


export const newCurrentTest = (test) => ({
    type: types.NEW_CURRENT_TEST,
    test
})