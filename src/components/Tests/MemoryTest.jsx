import React from 'react';
import { connect } from 'http2';
import { advanceTestScript } from './../../actions/testScriptActions';

class MemoryTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 

         };
    }
    render() {
        return (
            <div>
                <p>This is a MemoryTest. {this.props.id}</p>
                <Button style={buttonStyle} color='primary' variant='outlined' onClick={props.advanceTestScript}>Next</Button>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    testScriptPosition: state.testScriptPosition,
});

export default connect(mapStateToProps)(MemoryTest);