import React from 'react';
import SideBar from './SideBar';
import ArchiveFileController from './ArchiveFileController'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

const ArchiveStyles = makeStyles(theme => ({
    root: {
        height: '100vh',
        width: '100%'
    }
}));

const Archive = () => {
    const classes= ArchiveStyles()
    return (
            <Grid container spacing='0' className={classes.root}>
                <Grid item xs={2} classname={classes.root}>
                    <SideBar/>
                </Grid>
                <Grid item xs={10} classname={classes.root}>
                    <ArchiveFileController/>
                </Grid>
            </Grid>
    );
}

export default Archive;