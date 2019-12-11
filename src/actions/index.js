import constants from './../constants';
import firebase from 'firebase';
const { firebaseConfig } = constants;

firebase.initializeApp(firebaseConfig);

const users = firebase.database().ref('users');

export function newUser(_firstName, _lastName, _email, _password) {
    return () => tickets.push({
        firstName: _firstName,
        lastName: _lastName,
        email: _email,
        password: _password,
    })
}