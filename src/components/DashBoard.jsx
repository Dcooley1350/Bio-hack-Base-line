import React from 'react';
import SideBar from './SideBar';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import ArchiveFileController from './ArchiveFileController';

const DashboardStyles = makeStyles(theme => ({
    root: {
        height: '93vh',
        width: '100%'
    }
}));

const DashBoard = (props) => {
    const classes = DashboardStyles();
    console.log('tacos',props);
    return (
        <div className={classes.root}>
            <Grid container spacing='0' className={classes.root}>
                <Grid item xs={2} className={classes.root}>
                    <SideBar currentRouterPath={props.currentRouterPath}/>
                </Grid>
                <Grid item xs={10} className={classes.root}>
                </Grid>
            </Grid>
        </div>
    );
}

export default DashBoard;