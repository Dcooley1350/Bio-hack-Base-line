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
    const classes = ArchiveFileControllerStyles();
    return (  
        <div className={classes.root}>
            {(props.tests).map(testObject => {
                let testKeys = Object.keys(testObject);
                let testKey = testKeys[0];
                let test = testObject[testKey];
                return(<ArchiveFile 
                        ctrlCondition={test.ctrlCondition}
                        ctrlConditionNotes={test.ctrlConditionNotes}
                        expCondition={test.expCondition}
                        expConditionNotes={test.expConditionNotes}
                        date={test.date}
                        time={test.time}
                        memoryTest1={test.memoryTest1}
                        memoryTest2={test.memoryTest2}
                        memoryTest3={test.memoryTest3}
                        memoryTest4={test.memoryTest4}
                        memoryTest5={test.memoryTest5}
                        memoryTest6={test.memoryTest6}
                        memoryTest7={test.memoryTest7}
                        memoryTest8={test.memoryTest8}
                        reactionTimeTest1={test.reactionTimeTest1}
                        reactionTimeTest2={test.reactionTimeTest2}
                        reactionTimeTest3={test.reactionTimeTest3}
                        reactionTimeTest4={test.reactionTimeTest4}
                        reactionTimeTest5={test.reactionTimeTest5}
                        avgReactionTime={test.avReactionScore}
                        memoryTestScore={test.memoryScore}
                        key={testKeys[0]}
                    />)
            })}
        </div>
    );
}

const mapStateToProps = (state) => {
 return{
     tests: state.testsById
 }
}
 
export default connect(mapStateToProps)(ArchiveFileController);