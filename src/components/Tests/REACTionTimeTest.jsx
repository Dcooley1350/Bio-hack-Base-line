import React from 'react';
import Button from '@material-ui/core/Button';
import { advanceTestScript } from '../../actions/testScriptActions';
import { connect } from 'react-redux';
import { addReactionTimeResult } from '../../actions/currentTestActions';

class REACTionTimeTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scriptPosition: 0,
            iconPositions: [],
            correctIcon: undefined,
          };
        this.setIconPositions();
        this.onAdvanceButtonClick=this.onAdvanceButtonClick.bind(this);
        this.setIconPositions=this.setIconPositions.bind(this);
    };

    componentDidUpdate(prevProps){
        if(prevProps.iconPositions !== this.props.memoryItems){
            this.setIconPositions();
        }
    }

    onAdvanceButtonClick(event){
    event.preventDefault();
       this.props.dispatch(advanceTestScript());
       this.props.dispatch(addReactionTimeResult("result",this.props.id))
    };

    setIconPositions(){
        let positions= [1,2,3,4,5,6,7,8,9,10,11,12];
        function random(a, b) { return 0.5 - Math.random(); };
        let randomIconPositions = positions.sort(random);
        this.setState({ iconPositions: randomIconPositions })
    }
    render() {
        const buttonStyle={
            marginBottom: '10px'
        };
        const mainDivStyle = {
            textAlign: 'center',
            height: '100%'
        }
        return (
            <div style={mainDivStyle}>
                <p>Reaction Time Test  #{this.props.id}</p>
                <Button style={buttonStyle} color='primary' variant='outlined' onClick={this.onAdvanceButtonClick}>Next</Button>
            </div>
        );
    };
};

const mapStateToProps = (state) => ({
    testScriptPosition: state.testScriptPosition,
});

export default connect(mapStateToProps)(REACTionTimeTest);