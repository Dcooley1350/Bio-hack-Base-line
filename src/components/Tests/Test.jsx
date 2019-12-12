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

const testStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    width: '100%'
  }
}));

const Test = (props) => {
  const classes = testStyles()
  console.log()

  const testScriptConditionalRender = () => {
    console.log("tacos",props)
    switch(props.testScriptPosition){
      case 0:
        return(<StartTestInfo/>);
      case 1:
        return(<NewTestForm/>);
      case 2:
        return(<ReactionTimeTest id={props.testScriptPosition}/>);
      case 3:
        return(<ReactionTimeTest id={props.testScriptPosition}/>);
      case 4:
        return(<ReactionTimeTest id={props.testScriptPosition}/>);
      case 5:
        return(<ReactionTimeTest id={props.testScriptPosition}/>);
      case 6:
        return(<ReactionTimeTest id={props.testScriptPosition}/>);
      case 7:
        return(<MemoryTest memoryItems='5' id={props.testScriptPosition}/>);
      case 8:
        return(<MemoryTest memoryItems='6' id={props.testScriptPosition}/>);
      case 9:
        return(<MemoryTest memoryItems='7' id={props.testScriptPosition}/>);
      case 10:
        return(<MemoryTest memoryItems='8' id={props.testScriptPosition}/>);
      case 11:
        return(<MemoryTest memoryItems='9' id={props.testScriptPosition}/>);
      case 12:
        return(<MemoryTest memoryItems='10' id={props.testScriptPosition}/>);
      case 13:
        return(<MemoryTest memoryItems='11' id={props.testScriptPosition}/>);
      case 14:
        return(<MemoryTest memoryItems='12' id={props.testScriptPosition}/>);
      default:
        return(<p>TESTING IS BROKEN at {props.testScriptPosition}</p>)

    }
  }


  return (
    <div className={classes.root}>
      <Grid container spacing='0' className={classes.root}>
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