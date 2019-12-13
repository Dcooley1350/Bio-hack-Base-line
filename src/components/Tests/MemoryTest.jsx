import React from 'react';
import { connect } from 'react-redux';
import { advanceTestScript } from './../../actions/testScriptActions';
import Button from '@material-ui/core/Button';
import { addMemoryTestResult } from '../../actions/currentTestActions'

class MemoryTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            scriptPosition: 0,
            keyNumbers: []
         };
         this.onAdvanceButtonClick=this.onAdvanceButtonClick.bind(this);
         this.setKeyNumbers=this.setKeyNumbers.bind(this);
    };

    setKeyNumbers(){
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
    componentDidUpdate(){
        console.log(this.props.memoryItems);
        this.setKeyNumbers();
    };

    
    render() {
        const buttonStyle={
            marginBottom: '10px'
        }
        
        return (
            <div>
                <p>This is a MemoryTest. {this.props.id}</p>
                <Button style={buttonStyle} color='primary' variant='outlined' onClick={this.onAdvanceButtonClick}>Next</Button>
            </div>
        );
    };
};

const mapStateToProps = (state) => ({
    testScriptPosition: state.testScriptPosition,
});

export default connect(mapStateToProps)(MemoryTest);