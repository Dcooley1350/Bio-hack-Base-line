import React from 'react';
import Button from '@material-ui/core/Button';
import { advanceTestScript } from '../../actions/testScriptActions';
import { connect } from 'react-redux';
import { addReactionTimeResult } from '../../actions/currentTestActions';
import ReactionTimeTestGrid from './ReactionTImeTestGrid.jsx'
import ReactionTimeIcon from './ReactionTimeIcon';

class REACTionTimeTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scriptPosition: 0,
            iconPositions: [],
            correctIcon: undefined,
          };
        this.testScriptTime= '';
        this.setIconPositions();
        this.setCorrectIcon();
        this.onAdvanceButtonClick=this.onAdvanceButtonClick.bind(this);
        this.setIconPositions=this.setIconPositions.bind(this);
        this.setCorrectIcon=this.setCorrectIcon.bind(this);
        this.stopTestScript=this.stopTestScript.bind(this);
        this.handleBeginTest=this.handleBeginTest.bind(this);
        this.advanceTestScript=this.advanceTestScript.bind(this);
    };

    componentDidUpdate(prevProps){
        if(prevProps.iconPositions !== this.props.iconPositions){
            this.setIconPositions();
            this.setCorrectIcon();
        }
    }

    onAdvanceButtonClick(event){
    event.preventDefault();
       this.props.dispatch(advanceTestScript());
       this.props.dispatch(addReactionTimeResult("result",this.props.id))
       this.setState({ scriptPosition: 0, iconPositions: [], correctIcon: null });
    };
    setCorrectIcon(){
        let correctIcon = Math.floor(Math.random() * 12);
        this.setState({ iconPosition: correctIcon})
    }

    setIconPositions(){
        let positions= [1,2,3,4,5,6,7,8,9,10,11,12];
        function random(a, b) { return 0.5 - Math.random(); };
        let randomIconPositions = positions.sort(random);
        this.setState({ iconPositions: randomIconPositions })
    }

    advanceTestScript() {
        let newScriptPosition = this.state.scriptPosition;
        newScriptPosition = newScriptPosition + 1;
        this.setState({ scriptPosition: newScriptPosition })
    };
    
    handleBeginTest(event){
        this.advanceTestScript();
        this.testScriptTime = setInterval(this.advanceTestScript, 1000);
    }

    stopTestScript(){
        clearInterval(this.testScriptTime);
    }

    render() {
        function reactionTimeTestScript(){
            switch(this.state.scriptPosition){
                case 0:

                    return(
                        <div>
                            <h5>After you click 'begin' below, a countdown will start. At the end of the countdown, a grid of icons will appear, along with an instruction. Find and click the icon instructed. Your time will be recorded.</h5>
                            <Button style={buttonStyle} color='primary' variant='outlined' onClick={handleBeginTest}>Begin</Button>
                        </div>
                    );
                case 1:
                    return(<h1>3</h1>);
                case 2:
                    return (<h1>2</h1>);
                case 3:
                    return (<h1>1</h1>);
                case 4:
                    this.stopTestScript();
                    return(
                        <div>
                            <ReactionTimePrompt correctIcon={this.state.correctIcon}/>
                            <ReactionTimeTestGrid iconAssignment={this.state.iconPositions} handleCorrectIconClick={this.onAdvanceButtonClick}/>
                        </div>
                    );
            }
        }
        const buttonStyle={
            marginBottom: '10px'
        };
        const mainDivStyle = {
            textAlign: 'center',
            height: '100%'
        }
        return (
            <div style={mainDivStyle}>
                <h2>Reaction Time Test  #{this.props.id}</h2>
                <Button style={buttonStyle} color='primary' variant='outlined' onClick={this.onAdvanceButtonClick}>Next</Button>
            </div>
        );
    };
};

const mapStateToProps = (state) => ({
    testScriptPosition: state.testScriptPosition,
});

export default connect(mapStateToProps)(REACTionTimeTest);