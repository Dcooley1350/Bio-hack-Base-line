import React from 'react';
import { connect } from 'react-redux';
import { advanceTestScript } from './../../actions/testScriptActions';
import Button from '@material-ui/core/Button';

class MemoryTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 

         };
         this.onAdvanceButtonClick=this.onAdvanceButtonClick.bind(this);
    }
    onAdvanceButtonClick(event){
        event.preventDefault();
       this.props.dispatch(advanceTestScript());
    }
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
    }
}
const mapStateToProps = (state) => ({
    testScriptPosition: state.testScriptPosition,
});

export default connect(mapStateToProps)(MemoryTest);