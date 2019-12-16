import Constants from './../constants';
import firebase from 'firebase';

const { constants } = Constants;
const { firebaseConfig } = Constants;
console.log(constants);
console.log(firebaseConfig);
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

export function sendTestToFireBase(_expCondition, _expConditionNotes, _Time, _Date, _ctrlConditions, _ctrlConditionsNotes){
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
    type: constants.NEW_CURRENT_TEST,
    test
})