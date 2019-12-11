import React from 'react';
import SideBar from './SideBar';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import ArchiveFileController from './ArchiveFileController';

const DashboardStyles = makeStyles(theme => ({
    root: {     
        height: '100%',
        width: '100%'
    }
}));

const DashBoard = () => {
    const classes = DashboardStyles()
    return(
        
        <Grid container spacing='0' className={classes.root}>
            <Grid item xs={2} classname={classes.root}>
                <SideBar />
            </Grid>
            <Grid item xs={10} classname={classes.root}>
            </Grid>
        </Grid>
    );
}

export default DashBoard;