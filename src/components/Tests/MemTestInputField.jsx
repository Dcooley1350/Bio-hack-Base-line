import React from 'react';
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const MemTestInputField = (props) => {
    let _numbers = '';
    function handleFormSubmit(event){
        event.preventDefault();
        props.memoryTestFinish(this.props.keyNumbers,_numbers.value)

        _numbers = '';
    }
    return (
        <form onSubmit={handleFormSubmit}>
            <TextField type='number' id='inputNumbers' InputLabelProps={{ shrink: true }} width='200' label='Input Numbers' ref={(input) => {_numbers = input;}}/>
            <Button type='submit' style={buttonStyle} color='primary' variant='outlined' >Submit</Button>
        </form>
      );
}
 
export default MemTestInputField;