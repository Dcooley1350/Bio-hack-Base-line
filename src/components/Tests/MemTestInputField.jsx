import React from 'react';
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

class MemTestInputField extends React.Component {
    constructor(props){
        super(props);
        this.state={
            inputNums: []
        }
        this.handleMemoryTestFinish=this.handleMemoryTestFinish.bind(this);
        this.handleNumberInput=this.handleNumberInput.bind(this);
    }
    
    handleMemoryTestFinish(event){
        event.preventDefault();
        this.props.memoryTestFinish(this.props.keyNumbers,this.state.inputNums);
        
        
    }
    handleNumberInput(event){
        event.preventDefault();
        let newInputNums = this.state.inputNums;
        newInputNums.push()
        this.setState({ inputNums: newInputNums });
    }
    render(){
        const buttonStyle = {
            marginBottom: '10px'
        }
        
        return (
            <div>
                <h3>Input the numbers in order below. Input a single number then click input number. Submit test when you have added all numbers from memory.</h3>
                <h5>
                    {this.state.inputNums.map(function(num) {return(num)})}
                </h5>
                <form onSubmit={this.handleNumberInput}>
                    <TextField type='number' id='inputNumbers' InputLabelProps={{ shrink: true }} width='200' label='Input Numbers'/>
                    <Button style={buttonStyle} color='primary' variant='outlined' type='submit'>Input Number</Button>
                </form>
                    <Button style={buttonStyle} color='secondary' variant='outlined' onClick={this.handleMemoryTestFinish} >Submit Test</Button>
            </div>
        );
    };
};
 
export default MemTestInputField;