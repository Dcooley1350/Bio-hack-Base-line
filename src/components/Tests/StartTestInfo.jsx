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
    
    return (
        <Container maxWidth='lg'>
            <Paper>
                <Container maxWidth='lg'>
                    <p>This is a boat load of info about your new test</p>
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