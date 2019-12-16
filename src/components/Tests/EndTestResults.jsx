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
        let _date = props.currentTest.date;
        let _time = props.currentTest.time;
        let _ctrlCondition = props.currentTest.ctrlCondition;
        let _ctrlConditionNotes = props.currentTest.ctrlConditionNotes;
        let _expCondition = props.currentTest.expCondition;
        let _expConditionNotes= props.currentTest.expConditionNotes;
        let _reactionTimeTest1 = props.currentTest.reactionTimeTest1;
        let _reactionTimeTest2 = props.currentTest.reactionTimeTest2;
        let _reactionTimeTest3 = props.currentTest.reactionTimeTest3;
        let _reactionTimeTest4 = props.currentTest.reactionTimeTest4;
        let _reactionTimeTest5 = props.currentTest.reactionTimeTest5;
        let _memoryTest1 = props.currentTest.MemoryTest1;
        let _memoryTest2 = props.currentTest.MemoryTest2;
        let _memoryTest3 = props.currentTest.MemoryTest3;
        let _memoryTest4 = props.currentTest.MemoryTest4;
        let _memoryTest5 = props.currentTest.MemoryTest5;
        let _memoryTest6 = props.currentTest.MemoryTest6;
        let _memoryTest7 = props.currentTest.MemoryTest7;
        let _memoryTest8 = props.currentTest.MemoryTest8;
        props.dispatch(sendTestToFireBase(
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
                                <li key='1'>Test 1: {props.currentTest.reactionTimeTest1}</li>
                                <li key='2'>Test 2: {props.currentTest.reactionTimeTest2}</li>
                                <li key='3'>Test 3: {props.currentTest.reactionTimeTest3}</li>
                                <li key='4'>Test 4: {props.currentTest.reactionTimeTest4}</li>
                                <li key='5'>Test 5: {props.currentTest.reactionTimeTest5}</li>
                            </ul>
                            <h4>Memory Test:</h4>
                            <ul>
                                <li key='1'>Test 1: {props.currentTest.MemoryTest1}</li>
                                <li key='2'>Test 2: {props.currentTest.MemoryTest2}</li>
                                <li key='3'>Test 3: {props.currentTest.MemoryTest3}</li>
                                <li key='4'>Test 4: {props.currentTest.MemoryTest4}</li>
                                <li key='5'>Test 5: {props.currentTest.MemoryTest5}</li>
                                <li key='6'>Test 6: {props.currentTest.MemoryTest6}</li>
                                <li key='7'>Test 7: {props.currentTest.MemoryTest7}</li>
                                <li key='8'>Test 8: {props.currentTest.MemoryTest8}</li>
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
});

export default connect(mapStateToProps)(EndTestResults);