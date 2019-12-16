import React from 'react';
import { connect } from 'react-redux';
import { advanceTestScript } from './../../actions/testScriptActions';
import Button from '@material-ui/core/Button';
import { addMemoryTestResult } from '../../actions/currentTestActions';
import Paper from '@material-ui/core/Paper';
import MemTestInputField from './MemTestInputField';
import MemTestNumber from './MemTestNumber';

class MemoryTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            scriptPosition: 0,
            keyNumbers: []
        };
        this.testScriptTime = ''; 
        this.setKeyNumbers();
        this.memoryTestFinish=this.memoryTestFinish.bind(this);
        this.setKeyNumbers=this.setKeyNumbers.bind(this);
        this.advanceTestScript=this.advanceTestScript.bind(this);
         this.startTestScript=this.startTestScript.bind(this);
         this.stopTestScript=this.stopTestScript.bind(this);
    };
    
    componentDidUpdate(prevProps) {
        if(prevProps.memoryItems !== this.props.memoryItems){
            this.setKeyNumbersState();
            
            
        }
    }

    setKeyNumbers(){
        let newKeyNums = [];
        for (var i = 0; i < this.props.memoryItems; ++i) {
            let num = Math.floor(Math.random() * 11);
            newKeyNums.push(num);
        }
        this.state.keyNumbers= newKeyNums;
    }

    setKeyNumbersState(){
        let newKeyNums= [];
        for (var i = 0; i < this.props.memoryItems; ++i){
            let num = Math.floor(Math.random() * 11);
            newKeyNums.push(num);
        }
        this.setState({ keyNumbers: newKeyNums })
    };
    
    memoryTestFinish(correctNumbers,inputNumbers){
       this.setState({ scriptPosition: 0 });
       this.props.dispatch(advanceTestScript());
       let result = {
           correctNumbers,
           inputNumbers
       }

       this.props.dispatch(addMemoryTestResult(result,this.props.id));
    };
    advanceTestScript(){
        let newScriptPosition = this.state.scriptPosition;
        newScriptPosition = newScriptPosition +1;
        this.setState({ scriptPosition: newScriptPosition })
    };
    
    startTestScript(event){
        event.preventDefault();   
        this.testScriptTime = setInterval(this.advanceTestScript, 500);
    }
    
    stopTestScript(){
        clearInterval(this.testScriptTime);
    };
    
    render() {
        const memoryTestScript =() => {

            switch(this.state.scriptPosition){
                case 0:
                    return(
                        <div>
                            <p>You will be shown a series of numbers between 1-100.</p>
                            <p>You will then be asked to recall those numbers.</p>
                            <Button style={buttonStyle} color='primary' id="start" variant='outlined' onClick={this.startTestScript}>Begin Test</Button>
                        </div>
                    );
                case 1:
                    return (<div></div>);
                case 2:
                    return(<MemTestNumber id={this.state.keyNumbers[0]}/>);
                case 3:
                    return (<MemTestNumber id={this.state.keyNumbers[1]} />);
                case 4:
                    return (<MemTestNumber id={this.state.keyNumbers[2]} />);
                case 5:
                    return (<MemTestNumber id={this.state.keyNumbers[3]} />);
                case 6:
                    return (<MemTestNumber id={this.state.keyNumbers[4]} />);
                case 7:
                    if(this.state.keyNumbers[5]){
                        return ( <MemTestNumber id={this.state.keyNumbers[5]} />);
                    }
                    else{
                        this.stopTestScript();
                        return(<MemTestInputField keyNumbers={this.state.keyNumbers} memoryTestFinish={this.memoryTestFinish} />);

                    }
                case 8:
                    if (this.state.keyNumbers[6]) {
                        return (<MemTestNumber id={this.state.keyNumbers[6]} />);
                    }
                    else {
                        this.stopTestScript();
                        return (<MemTestInputField keyNumbers={this.state.keyNumbers} memoryTestFinish={this.memoryTestFinish} />);

                    }
                case 9:
                    if (this.state.keyNumbers[7]) {
                        return (<MemTestNumber id={this.state.keyNumbers[7]} />);
                    }
                    else {
                        this.stopTestScript();
                        return (<MemTestInputField keyNumbers={this.state.keyNumbers} memoryTestFinish={this.memoryTestFinish} />);

                    }
                case 10:
                    if (this.state.keyNumbers[8]) {
                        return (<MemTestNumber id={this.state.keyNumbers[8]} />);
                    }
                    else {
                        this.stopTestScript();
                        return (<MemTestInputField keyNumbers={this.state.keyNumbers} memoryTestFinish={this.memoryTestFinish} />);

                    }
                case 11:
                    if (this.state.keyNumbers[9]) {
                        return (<MemTestNumber id={this.state.keyNumbers[9]} />);
                    }
                    else {
                        this.stopTestScript();
                        return (<MemTestInputField keyNumbers={this.state.keyNumbers} memoryTestFinish={this.memoryTestFinish} />);

                    }
                case 12:
                    if (this.state.keyNumbers[10]) {
                        return (<MemTestNumber id={this.state.keyNumbers[10]} />);
                    }
                    else {
                        this.stopTestScript();
                        return (<MemTestInputField keyNumbers={this.state.keyNumbers} memoryTestFinish={this.memoryTestFinish} />);

                    }
                case 13:
                    if (this.state.keyNumbers[11]) {
                        return (<MemTestNumber id={this.state.keyNumbers[11]} />);
                    }
                    else {
                        this.stopTestScript();
                        return (<MemTestInputField keyNumbers={this.state.keyNumbers} memoryTestFinish={this.memoryTestFinish} />);

                    }
                case 14:
                    if (this.state.keyNumbers[12]) {
                        return (<MemTestNumber id={this.state.keyNumbers[12]} />);
                    }
                    else {
                        this.stopTestScript();
                        return (<MemTestInputField keyNumbers={this.state.keyNumbers} memoryTestFinish={this.memoryTestFinish} />);

                    }
                default:
                    return(<h1>SomethingWentWrongInMemTestScript at position {this.state.scriptPosition}</h1>)

            }   
        }

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
                {memoryTestScript()}
            </div>
        );
    };
};

const mapStateToProps = (state) => ({
    testScriptPosition: state.testScriptPosition,
});

export default connect(mapStateToProps)(MemoryTest);