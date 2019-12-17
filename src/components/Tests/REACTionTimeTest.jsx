import React from 'react';
import Button from '@material-ui/core/Button';
import { advanceTestScript } from '../../actions/testScriptActions';
import { connect } from 'react-redux';
import { addReactionTimeResult } from '../../actions/currentTestActions';
import ReactionTimeTestGrid from './ReactionTImeTestGrid.jsx';
import ReactionTimePrompt from './ReactionTimePrompt';
import ReactionTimeStopWatch from './ReactionTimeStopWatch';


class REACTionTimeTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scriptPosition: 0,
            iconPositions: [],
            correctIcon: null,
            reactionTimer: 0
          };
        this.reactionTime = '';
        this.testScriptTime= '';
        this.setIconPositions();
        this.setCorrectIcon();
        this.onAdvanceButtonClick=this.onAdvanceButtonClick.bind(this);
        this.setIconPositions=this.setIconPositions.bind(this);
        this.setCorrectIcon=this.setCorrectIcon.bind(this);
        this.stopTestScript=this.stopTestScript.bind(this);
        this.handleBeginTest=this.handleBeginTest.bind(this);
        this.advanceTestScript=this.advanceTestScript.bind(this);
        this.setIconPositionsState=this.setIconPositions.bind(this);
        this.setCorrectIconState=this.setCorrectIconState.bind(this);
        this.incremementReactionTimer=this.incremementReactionTimer.bind(this);
        this.startReactionTimer=this.startReactionTimer.bind(this);
        this.stopReactionTimer=this.stopReactionTimer.bind(this);
    };
    componentWillUnmount(){
        console.log('clearInterval');
        clearInterval(this.reactionTime);
    }
    componentDidUpdate(prevProps){
        if(prevProps.id !== this.props.id){
            this.setIconPositionsState();
            this.setCorrectIconState();
        }
    }

    onAdvanceButtonClick(){
       this.stopReactionTimer()
        this.setState({ reactionTime: 0 })
       this.props.dispatch(advanceTestScript());
       this.props.dispatch(addReactionTimeResult(this.state.reactionTimer,this.props.id))
       this.setState({ scriptPosition: 0 });
    };
    setCorrectIconState(){
        let correctIcon = Math.floor(Math.random() * 12);
        console.log("HERE IS THE CONSOLE LOG", correctIcon)
        this.setState({ correctIcon: correctIcon})
    }
    setCorrectIcon(){
        let correctIcon = Math.floor(Math.random() * 12);
        this.state.correctIcon= correctIcon
    }

    setIconPositionsState(){
        let positions= [1,2,3,4,5,6,7,8,9,10,11,12];
        function random(a, b) { return 0.5 - Math.random(); };
        let randomIconPositions = positions.sort(random);
        console.log(randomIconPositions);
        this.setState({ iconPositions: randomIconPositions })
    }

    setIconPositions(){
        let positions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        function random(a, b) { return 0.5 - Math.random(); };
        let randomIconPositions = positions.sort(random);
        this.state.iconPositions= randomIconPositions;
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
        // this.setState({reactionTime: 0})
    }

    incremementReactionTimer(){
        let newTime = this.state.reactionTimer;
        newTime = newTime + 0.01;
        this.setState({ reactionTime: newTime })
    }

    startReactionTimer(){
        return this.setState(() => {
            const startTime = Date.now()-this.state.reactionTimer;
            this.reactionTime = setInterval(() => {console.log(setInterval);
                this.setState({reactionTimer: Date.now() - startTime})
            })
        })
    }
    
    stopReactionTimer(){
        clearInterval(this.reactionTime);
    }

    render() {
        const reactionTimeTestScript = () => {
            switch(this.state.scriptPosition){
                case 0:

                    return(
                        <div>
                            <h5>After you click 'begin' below, a countdown will start. At the end of the countdown, a grid of icons will appear, along with an instruction. Find and click the icon instructed. Your time will be recorded.</h5>
                            <Button style={buttonStyle} color='primary' variant='outlined' onClick={this.handleBeginTest}>Begin</Button>
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
                    this.startReactionTimer();
                    return(
                        <div>
                            <ReactionTimePrompt correctIcon={this.state.correctIcon}/>
                            <ReactionTimeTestGrid iconAssignment={this.state.iconPositions} handleCorrectIconClick={this.onAdvanceButtonClick} correctIcon={this.state.correctIcon}/>
                            <h1>{this.state.reactionTimer}ms</h1>
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
        console.log(this.state);
        return (
            <div style={mainDivStyle}>
                <h2>Reaction Time Test  #{this.props.id}</h2>
                {reactionTimeTestScript()}
            </div>
        );
    };
};

const mapStateToProps = (state) => ({
    testScriptPosition: state.testScriptPosition,
});

export default connect(mapStateToProps)(REACTionTimeTest);