import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ArchiveFile from './ArchiveFile';
const ArchiveFileControllerStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        height: '100%'
    },
}));

const ArchiveFileController = (props) => {

    const classes = ArchiveFileControllerStyles();
    return (  
        <div className={classes.root}>
            {/* Mapping all the individual tests to archive file will go here */}
            <ArchiveFile/>
        </div>
    );
}
 
export default ArchiveFileController;