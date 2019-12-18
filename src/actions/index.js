import Constants from './../constants';
import firebase from 'firebase';
import { sendUserToRedux } from './userActions';

const { constants } = Constants;
const { firebaseConfig } = Constants;

firebase.initializeApp(firebaseConfig);
export var db = firebase.firestore();

export function sendNewUserToFireBase(email, password) {
    console.log(email, password);
    return () => firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
    });
}

export function logInUser(email, password) {
    return () => firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
    });
}

export function logOutUser() {
    return () => firebase.auth().signOut().then(function () {
        console.log("sign out successfull");
    }).catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
    });
}

export function sendTestToFireBase(
    _userId,
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
    return () => db.collection("tests").add({
        userId: _userId,
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


export function getTestsFromFirebase(userId) {
    return function(dispatch) {
        let tests = {};
        db.collection("tests").where("userId", "==", userId)
        .get()
        .then(function(querySnapshot) {

            querySnapshot.forEach(function(doc) {
                tests[doc.id] = doc.data();
            });
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        });
        console.log(tests);
        dispatch(sendTestsToRedux(tests));

    }
};

export const sendTestsToRedux = (tests) => ({
    type: constants.SEND_TESTS_TO_REDUX,
    tests
})

export function watchAuthStateChanged() {
    return function(dispatch) {
        firebase.auth().onAuthStateChanged(function (user) {
        dispatch(sendUserToRedux(user));
        })}}


export const newCurrentTest = (test) => ({
    type: constants.NEW_CURRENT_TEST,
    test
})