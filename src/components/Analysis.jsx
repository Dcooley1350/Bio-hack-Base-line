import React from 'react';
import SideBar from './SideBar'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const AnalysisStyles = makeStyles(theme => ({
    root: {
        height: '100vh',
        width: '100%'
    }
}));

const Analysis = () => {

const classes = AnalysisStyles()

    return ( 
        <div className={classes.root}>
            <Grid container spacing='0' className={classes.root}>
                <Grid item xs={2} classname={classes.root}>
                    <SideBar />
                </Grid>
                <Grid item xs={10} classname={classes.root}>
                </Grid>
            </Grid>
        </div>
    );
}
 
export default Analysis;