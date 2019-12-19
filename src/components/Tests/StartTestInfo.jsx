import React from 'react';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import { advanceTestScript } from './../../actions/testScriptActions';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';

const StartTestInfo = (props) => {
    const buttonStyle={
        marginBottom: '10px'
    }
    const textAllign = {
        textAlign: 'center'
    }
    
    return (
        <Container maxWidth='lg'>
            <Paper>
                <Container style={textAllign} maxWidth='lg'>
                    <h1 style={textAllign}>Define a New Test</h1>
                    <h3>You will be asked to enter control and experimental conditions for your test.</h3>
                    <h3>Reaction time and memory tests will follow.</h3>
                    <Button style={buttonStyle} color='primary' variant='outlined' onClick={props.advanceTestScript}>Next</Button>
                </Container>
            </Paper>
        </Container>
    );
}
const mapDispatchToProps = dispatch => {
    return {
        advanceTestScript: () => {dispatch(advanceTestScript())}
    }
}
export default connect(null,mapDispatchToProps)(StartTestInfo);