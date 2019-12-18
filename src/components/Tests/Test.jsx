import React from 'react';
import SideBar from '../SideBar'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { getThemeProps } from '@material-ui/styles';
import NewTestForm from './NewTestForm';
import { connect } from 'react-redux';
import ReactionTimeTest from './REACTionTimeTest';
import MemoryTest from './MemoryTest';
import StartTestInfo from './StartTestInfo';
import EndTestResults from './EndTestResults';

const testStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    width: '100%'
  }
}));

const Test = (props) => {
  const classes = testStyles()
  const testScriptConditionalRender = () => {
    switch(props.testScriptPosition){
      case 0:
        return(<StartTestInfo/>);
      case 1:
        return(<NewTestForm/>);
      case 2:
        return(<ReactionTimeTest id='1'/>);
      case 3:
        return(<ReactionTimeTest id='2'/>);
      case 4:
        return(<ReactionTimeTest id='3'/>);
      case 5:
        return(<ReactionTimeTest id='4'/>);
      case 6:
        return(<ReactionTimeTest id='5'/>);
      case 7:
        return(<MemoryTest memoryItems='4' id='1'/>);
      case 8:
        return(<MemoryTest memoryItems='5' id='2'/>);
      case 9:
        return(<MemoryTest memoryItems='6' id='3'/>);
      case 10:
        return(<MemoryTest memoryItems='7' id='4'/>);
      case 11:
        return(<MemoryTest memoryItems='8' id='5'/>);
      case 12:
        return(<MemoryTest memoryItems='9' id='6'/>);
      case 13:
        return(<MemoryTest memoryItems='10' id='7'/>);
      case 14:
        return(<MemoryTest memoryItems='11' id='8'/>);
        case 15:
        return(<EndTestResults/>);
      default:
        return(<p>TESTING IS BROKEN at {props.testScriptPosition}</p>)

    }
  }


  return (
    <div className={classes.root}>
      <Grid container spacing={0} className={classes.root}>
        <Grid item xs={2} className={classes.root}>
          <SideBar currentRouterPath={props.currentRouterPath}/>
        </Grid>
        <Grid item xs={10} className={classes.root}>
          {testScriptConditionalRender()}
        </Grid>
      </Grid>
    </div>
  );
}

const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
  currentTest: state.currentTest,
  testScriptPosition: state.testScriptPosition
});

export default connect(mapStateToProps)(Test);