import React from 'react';
import { connect } from 'react-redux';
import { advanceTestScript } from './../../actions/testScriptActions';
import Button from '@material-ui/core/Button';
import { addMemoryTestResult } from '../../actions/currentTestActions'
import Paper from '@material-ui/core/Paper'

class MemoryTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            scriptPosition: 0,
            keyNumbers: []
         };
         this.setKeyNumbers();
         this.onAdvanceButtonClick=this.onAdvanceButtonClick.bind(this);
         this.setKeyNumbers=this.setKeyNumbers.bind(this);
    };

    componentDidUpdate(prevProps) {
        if(prevProps.memoryItems !== this.props.memoryItems){
            this.setKeyNumbersState();

        }
    }
    setKeyNumbers(){
        let newKeyNums = [];
        for (var i = 0; i < this.props.memoryItems; ++i) {
            let num = Math.floor(Math.random() * 101);
            newKeyNums.push(num);
        }
        this.state.keyNumbers=newKeyNums
    }
    setKeyNumbersState(){
        let newKeyNums= [];
        for (var i = 0; i < this.props.memoryItems; ++i){
            let num = Math.floor(Math.random() * 101);
            newKeyNums.push(num);
        }
        this.setState({ keyNumbers: newKeyNums })
    };

    onAdvanceButtonClick(event){
        event.preventDefault();
       this.props.dispatch(advanceTestScript());
       this.props.dispatch(addMemoryTestResult("result",this.props.id));
    };
    
    render() {
        const memoryTestScript =() => {
            switch(this.state.scriptPostion){
                case 0:
                    return(
                        <div></div>
                    );
                case 0:
                    return();
                case 0:
                    return();
                case 0:
                    return();
                case 0:
                    return();
                case 0:
                    return();
                case 0:
                    return();
                case 0:
                    return();
                case 0:
                    return();
                case 0:
                    return();
            }
        }
        console.log(this.state.keyNumbers);
        const buttonStyle={
            marginBottom: '10px'
        }
        const mainDivStyle = {
            textAlign: 'center',
            height: '100%'
        }
        
        return (
            <div style={mainDivStyle}>
                <h2>MemoryTest #{this.props.id}</h2>
                <Button style={buttonStyle} color='primary' variant='outlined' onClick={this.onAdvanceButtonClick}>Next</Button>
            </div>
        );
    };
};

const mapStateToProps = (state) => ({
    testScriptPosition: state.testScriptPosition,
});

export default connect(mapStateToProps)(MemoryTest);