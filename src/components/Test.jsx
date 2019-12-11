import React from 'react';
import SideBar from './SideBar'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { getThemeProps } from '@material-ui/styles';
import NewTestForm from './NewTestForm';
const testStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    width: '100%'
  }
}));

const Test = (props) => {

  const classes = testStyles()

  return (
    <div className={classes.root}>
      <Grid container spacing='0' className={classes.root}>
        <Grid item xs={2} className={classes.root}>
          <SideBar currentRouterPath={props.currentRouterPath}/>
        </Grid>
        <Grid item xs={10} className={classes.root}>
          <NewTestForm/>
        </Grid>
      </Grid>
    </div>
  );
}

export default Test;