import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import 

const EndTestResults = (props) => {
    const alignCenterStyle = {
        textAlign: 'center'
    }
    const buttonStyle={
        marginBottom: '10px'
    }

    function onSaveButtonClick(event){
        event.preventDefault()
        console.log(this.props)
    }
    function onDiscardButtonClick(event){
        event.preventDefault()
        console.log(this.props);
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
                                <li>Control Condition: {props.currentTest.expCondition}</li>
                                <li>CTRL Cond. Notes:     {props.currentTest.ctrlConditionNotes}</li>
                            </ul>
                        </Grid>
                        <Grid item xs={6}>
                            <div style={alignCenterStyle}>
                                <h3>Results:</h3>
                            </div>
                            <h4>Reaction Time:</h4>
                            <ul>
                                <li key='1'>Test 1: {props.currentTest.MemoryTest1}</li>
                                <li key='2'>Test 2: {props.currentTest.MemoryTest2}</li>
                                <li key='3'>Test 3: {props.currentTest.MemoryTest3}</li>
                                <li key='4'>Test 4: {props.currentTest.MemoryTest4}</li>
                                <li key='5'>Test 5: {props.currentTest.MemoryTest5}</li>
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