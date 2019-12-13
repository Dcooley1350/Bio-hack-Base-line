import React from 'react';
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

class MemTestInputField extends React.Component {
    constructor(props){
        super(props);
        this.state={
            number: null,
            inputNums: []
        }
        this.handleMemoryTestFinish=this.handleMemoryTestFinish.bind(this);
        this.handleNumberInput=this.handleNumberInput.bind(this);
        this.onInputFieldChange=this.onInputFieldChange.bind(this);
    };
    
    handleMemoryTestFinish(event){
        event.preventDefault();
        this.props.memoryTestFinish(this.props.keyNumbers,this.state.inputNums);
        
        
    };

    onInputFieldChange(event) {
        event.preventDefault();
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    handleNumberInput(event){
        event.preventDefault();
        let newInputNums = this.state.inputNums;
        newInputNums.push(this.state.number);
        this.setState({ inputNums: newInputNums });
        console.log(this.state);
        this.setState({number: null});
        console.log(this.state);
        document.getElementById('inputNum').reset();
    };

    render(){
        const buttonStyle = {
            marginBottom: '10px'
        }
        
        return (
            <div>
                <h3>Input the numbers in order below.</h3>
                <h3> Input a single number then click input number.</h3>
                <h3> Submit test when you have added all numbers from memory.</h3>
                <h5>
                    {this.state.inputNums.map(function (num) { return (<em>{num}, </em>)})}
                </h5>
                <form id='inputNum' onSubmit={this.handleNumberInput}>
                    <Grid container>
                        <TextField required type='number' id='number' InputLabelProps={{ shrink: true }} width='200' label='Input Numbers' onChange={this.onInputFieldChange}/>
                    </Grid>
                    <Grid container>
                        <Button style={buttonStyle} color='primary' variant='outlined' type='submit'>Input Number</Button>
                    </Grid>
                </form>
                    <Button style={buttonStyle} color='secondary' variant='outlined' onClick={this.handleMemoryTestFinish} >Submit Test</Button>
            </div>
        );
    };
};
 
export default MemTestInputField;