import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ArchiveFile from './ArchiveFile';
import { connect } from 'react-redux';

const ArchiveFileControllerStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        height: '100%'
    },
}));

const ArchiveFileController = (props) => {
    
    console.log(props);
    const classes = ArchiveFileControllerStyles();
    return (  
        <div className={classes.root}>
            {props.tests && props.tests.map(test => {
                return(<ArchiveFile
                id={test.id}
                testVar={test.testVar}
                description={test.description} />
            )})}
        </div>
    );
}

const mapStateToProps = (state) => {
 return{
     tests: state.testsById.tests
 }
}
 
export default connect(mapStateToProps)(ArchiveFileController);