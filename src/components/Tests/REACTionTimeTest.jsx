import React from 'react';
import Button from '@material-ui/core/Button';
import { advanceTestScript } from '../../actions/testScriptActions';
import { connect } from 'react-redux';
import { addReactionTimeResult } from '../../actions/currentTestActions';

class REACTionTimeTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
        this.onAdvanceButtonClick=this.onAdvanceButtonClick.bind(this);
    };
    onAdvanceButtonClick(event){
    event.preventDefault();
       this.props.dispatch(advanceTestScript());
       this.props.dispatch(addReactionTimeResult("result",this.props.id))
    };
    render() {
        const buttonStyle={
            marginBottom: '10px'
        };
        return (
            <div>
                <p>This is a reactionTimeTest. {this.props.id}</p>
                <Button style={buttonStyle} color='primary' variant='outlined' onClick={this.onAdvanceButtonClick}>Next</Button>
            </div>
        );
    };
};

const mapStateToProps = (state) => ({
    testScriptPosition: state.testScriptPosition,
});

export default connect(mapStateToProps)(REACTionTimeTest);