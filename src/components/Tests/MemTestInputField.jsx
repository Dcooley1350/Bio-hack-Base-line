import React from 'react';
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import v4 from 'uuid'

class MemTestInputField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputNums: []
        }
        this.handleMemoryTestFinish = this.handleMemoryTestFinish.bind(this);
        this.handleNumberInput = this.handleNumberInput.bind(this);
    };

    handleMemoryTestFinish(event) {
        event.preventDefault();
        this.props.memoryTestFinish(this.props.keyNumbers, this.state.inputNums);


    };



    handleNumberInput(event) {
        event.preventDefault();
        console.log(event.target.id)
        console.log(event.target)
        let newInputNums = this.state.inputNums;
        newInputNums.push(event.target.id);
        this.setState({ inputNums: newInputNums });
    };

    render() {
        const buttonStyle = {
            marginBottom: '10px',
            marginTop: '20px'
        }
        const numberButtonStyle = {
            height: '100px',
            width: '100px',
            fontSize: '80px'
        }
        const flexContainerStyle = {
            width: '100%',
            display: 'flex',
            justifyContent: 'center'
        }
        const inputNumsStyle = {
            height: '100px',
            fontSize: '80px'
        }

        return (
            <div>
                <h3>Input the numbers in order below.</h3>
                <h3> Input a single number then click input number.</h3>
                <h3> Submit test when you have added all numbers from memory.</h3>
                <h5 style={inputNumsStyle}>
                    {this.state.inputNums.map(function (num) { return (<em key={v4()}>{num}, </em>) })}
                </h5>
                <Grid container style={flexContainerStyle}>
                    <button id={1} onClick={this.handleNumberInput} style={numberButtonStyle}>1</button>
                    <button id={2} onClick={this.handleNumberInput} style={numberButtonStyle}>2</button>
                    <button id={3} onClick={this.handleNumberInput} style={numberButtonStyle}>3</button>
                </Grid>
                <Grid container style={flexContainerStyle}>
                    <button id={4} onClick={this.handleNumberInput} style={numberButtonStyle}>4</button>
                    <button id={5} onClick={this.handleNumberInput} style={numberButtonStyle}>5</button>
                    <button id={6} onClick={this.handleNumberInput} style={numberButtonStyle}>6</button>
                </Grid>
                <Grid container style={flexContainerStyle}>
                    <button id={7} onClick={this.handleNumberInput} style={numberButtonStyle}>7</button>
                    <button id={8} onClick={this.handleNumberInput} style={numberButtonStyle}>8</button>
                    <button id={9} onClick={this.handleNumberInput} style={numberButtonStyle}>9</button>
                </Grid>
                <Grid container style={flexContainerStyle}>
                    <button id={0} onClick={this.handleNumberInput} style={numberButtonStyle}>0</button>
                </Grid>
                <Button style={buttonStyle} color='secondary' variant='outlined' onClick={this.handleMemoryTestFinish} >Submit Test</Button>
            </div>
        );
    };
};

export default MemTestInputField;