import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { resetCurrentTest } from '../../actions/currentTestActions'; 
import { restartTestScript } from '../../actions/testScriptActions';
import { sendTestToFireBase } from '../../actions/index'

const EndTestResults = (props) => {
    const alignCenterStyle = {
        textAlign: 'center'
    }
    const buttonStyle={
        marginBottom: '10px'
    }

    function onSaveButtonClick(event){
        event.preventDefault()
        let _userId = props.currentUser.uid
        let _date = props.currentTest.date;
        let _time = props.currentTest.time;
        let _ctrlCondition = props.currentTest.ctrlCondition;
        let _ctrlConditionNotes = props.currentTest.ctrlConditionNotes;
        let _expCondition = props.currentTest.expCondition;
        let _expConditionNotes= props.currentTest.expConditionNotes;
        let _reactionTimeTest1 = props.currentTest.ReactionTimeTest1;
        let _reactionTimeTest2 = props.currentTest.ReactionTimeTest2;
        let _reactionTimeTest3 = props.currentTest.ReactionTimeTest3;
        let _reactionTimeTest4 = props.currentTest.ReactionTimeTest4;
        let _reactionTimeTest5 = props.currentTest.ReactionTimeTest5;
        let _memoryTest1 = props.currentTest.MemoryTest1;
        let _memoryTest2 = props.currentTest.MemoryTest2;
        let _memoryTest3 = props.currentTest.MemoryTest3;
        let _memoryTest4 = props.currentTest.MemoryTest4;
        let _memoryTest5 = props.currentTest.MemoryTest5;
        let _memoryTest6 = props.currentTest.MemoryTest6;
        let _memoryTest7 = props.currentTest.MemoryTest7;
        let _memoryTest8 = props.currentTest.MemoryTest8;
        props.dispatch(sendTestToFireBase(
            _userId,
            _date,
            _time,
            _ctrlCondition,
            _ctrlConditionNotes,
            _expCondition,
            _expConditionNotes,
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

        ))
        props.dispatch(restartTestScript());
        props.dispatch(resetCurrentTest());
        console.log(props);
    }

    function onDiscardButtonClick(event){
        event.preventDefault()
        props.dispatch(restartTestScript());
        props.dispatch(resetCurrentTest());
        console.log(props);
    }
    console.log(props);
    return (
        <Container maxWidth='md'>
            <Paper>
                <Container maxWidth='lg'>
                    <div style={alignCenterStyle}>
                        <h2>Test Summary:</h2>
                        <h5>Date: {props.currentTest.date}  Time: {props.currentTest.time}</h5>
                    </div>
                    <Grid container>
                        <Grid item xs={6}>
                            <div style={alignCenterStyle}>
                                <h3>Conditions:</h3>
                            </div>
                            <ul>
                                <li>Experiment Condition: {props.currentTest.expCondition}</li>
                                <li>EXP Cond. Notes:     {props.currentTest.expConditionNotes}</li>
                                <li>Control Condition: {props.currentTest.ctrlCondition}</li>
                                <li>CTRL Cond. Notes:     {props.currentTest.ctrlConditionNotes}</li>
                            </ul>
                        </Grid>
                        <Grid item xs={6}>
                            <div style={alignCenterStyle}>
                                <h3>Results:</h3>
                            </div>
                            <h4>Reaction Time:</h4>
                            <ul>
                                <li key='1'>Test 1: {props.currentTest.ReactionTimeTest1}</li>
                                <li key='2'>Test 2: {props.currentTest.ReactionTimeTest2}</li>
                                <li key='3'>Test 3: {props.currentTest.ReactionTimeTest3}</li>
                                <li key='4'>Test 4: {props.currentTest.ReactionTimeTest4}</li>
                                <li key='5'>Test 5: {props.currentTest.ReactionTimeTest5}</li>
                            </ul>
                            <h4>Memory Test:</h4>
                            <ul>
                                <li key='1'>Test 1: user input: {props.currentTest.MemoryTest1.userInputNumbersString}</li>
                                <li key='2'>Test 2: user input: {props.currentTest.MemoryTest2.userInputNumbersString}</li>
                                <li key='3'>Test 3: user input: {props.currentTest.MemoryTest3.userInputNumbersString}</li>
                                <li key='4'>Test 4: user input: {props.currentTest.MemoryTest4.userInputNumbersString}</li>
                                <li key='5'>Test 5: user input: {props.currentTest.MemoryTest5.userInputNumbersString}</li>
                                <li key='6'>Test 6:  user input: {props.currentTest.MemoryTest6.userInputNumbersString}</li>
                                <li key='7'>Test 7: user input: {props.currentTest.MemoryTest7.userInputNumbersString}</li>
                                <li key='8'>Test 8: user input: {props.currentTest.MemoryTest8.userInputNumbersString}</li>
                            </ul>
                        </Grid>
                        
                        <div>
                            <Button style={buttonStyle} variant='outlined' color='primary' onClick={onSaveButtonClick}>Save Results</Button>
                            <Button style={buttonStyle} variant='outlined' color='secondary' onClick={onDiscardButtonClick}>Discard Test</Button>
                        </div>
                    </Grid>
                </Container>
            </Paper>
        </Container>
    );
}

const mapStateToProps = (state) => ({
    currentTest: state.currentTest,
    currentUser: state.currentUser,
});

export default connect(mapStateToProps)(EndTestResults);