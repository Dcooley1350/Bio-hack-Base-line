import React from 'react';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import DateTime from '@material-ui/core/'


class NewTestForm extends React.Component {
    constructor(props){
        super(props);
        let state = {
            date: '',
            time: '',
            expCondition: '',
            expConditionNotes: '',
            ctrlCondition: '',
            ctrlConditionNotes: '',
        }
        this.onInputFieldChange=this.onInputFieldChange.bind(this);
        this.onNewTestSubmit=this.onNewTestSubmit.bind(this);
    };
    onInputFieldChange(event) {
        event.preventDefault();
        this.setState({
            [event.target.id]: event.target.value
        });
    }
    onNewTestSubmit(event) {
        event.preventDefault();
        console.log(this.state);
    };
    render() {
        const buttonStyle={
            marginBottom: '10px'
        }
        const labelStyles={
            marginTop: '20px'
        }
        return (  
            <Container maxWidth='lg'>
                <Paper>
                    <Container maxWidth='lg'>
                        <form onSubmit={this.onNewTestSubmit}>
                            <h3>Define New Test</h3>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <label style={labelStyles} htmlFor='expCondition'>Name/ExperimentalCondition:</label>
                                    <TextField type='text' id='expCondition' fullWidth InputLabelProps={{ shrink: true }} onChange={this.onInputFieldChange}/>
                                    <label style={labelStyles} htmlFor='expConditionNotes'>Experimental Condition Notes:</label>
                                    <TextField type='text' id='expConditionNotes' fullWidth InputLabelProps={{ shrink: true }} onChange={this.onInputFieldChange}/>
                                </Grid>
                                <Grid item xs={6}>
                                    <label style={labelStyles} htmlFor='time'>Time:</label>
                                    <TextField type='time' id='time' fullWidth defaultValue='12:00' InputLabelProps={{ shrink: true }} onChange={this.onInputFieldChange}/>
                                    <br/>
                                    <label style={labelStyles} htmlFor='date'>Date:</label>
                                    <TextField type='date' id='date' fullWidth defaultValue='0000-00-00' InputLabelProps={{ shrink: true }} onChange={this.onInputFieldChange}/>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xs={6}>
                                    <label htmlFor='ctrlConditions'>ControlConditions:</label>
                                    <TextField type='text' id='ctrlConditions' fullWidth InputLabelProps={{ shrink: true }} onChange={this.onInputFieldChange}/>
                                    <label htmlFor='ctrlConditionsNotes'>Control Conditions Notes:</label>
                                    <TextField type='text' id='ctrlConditionsNotes' fullWidth InputLabelProps={{ shrink: true }} onChange={this.onInputFieldChange}/>
                                </Grid>
                                <Grid item xs={6}>

                                </Grid>
                            </Grid>
                            <div>
                                <br/>
                                    <Button style={buttonStyle} type='submit' variant='outlined' color='primary' className='btn btn-large'>Start Test</Button>
                                <br/>
                            </div>
                        </form>
                    </Container>
                </Paper>
            </Container>
        );
    };
};

export default NewTestForm;