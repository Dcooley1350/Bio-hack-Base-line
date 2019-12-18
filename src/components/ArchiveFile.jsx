import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';

const archiveFileStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontsize: '12px',
        flexBasis: '33.33%',
        flexShrink: 0
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
}))

const ArchiveFile = (props) => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    const classes = archiveFileStyles();
    return (
        <div className={classes.root}>
            <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
                    <Typography className={classes.heading}>Date:{props.date}, Time: {props.time}</Typography>
                    <Typography className={classes.secondaryHeading}>Exp. Condition: {props.expCondition} </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <div className={classes.root}>

                    <Grid container>
                        <Grid item xs={6}>
                            <Typography>Experimental Condition Notes: {props.expConditionNotes}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                        <Typography>Control Condition: {props.ctrlCondition}</Typography>
                        <Typography>Control Condition Notes: {props.ctrlConditionNotes}</Typography>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={6}>
                        <h5>Memory Tests:</h5>
                        <ol>
                            <li>
                                <ul>
                                    <li>Input: {props.memoryTest1.userInputNumbersString}</li>
                                    <li>Actual: {props.memoryTest1.correctNumberString}</li>
                                </ul>
                            </li>
                            <li>
                                <ul>
                                    <li>Input: {props.memoryTest2.userInputNumbersString}</li>
                                    <li>Actual: {props.memoryTest2.correctNumberString}</li>
                                </ul>
                            </li>
                            <li>
                                <ul>
                                    <li>Input: {props.memoryTest3.userInputNumbersString}</li>
                                    <li>Actual: {props.memoryTest3.correctNumberString}</li>
                                </ul>
                            </li>
                            <li>
                                <ul>
                                    <li>Input: {props.memoryTest4.userInputNumbersString}</li>
                                    <li>Actual: {props.memoryTest4.correctNumberString}</li>
                                </ul>
                            </li>
                            <li>
                                <ul>
                                    <li>Input: {props.memoryTest5.userInputNumbersString}</li>
                                    <li>Actual: {props.memoryTest5.correctNumberString}</li>
                                </ul>
                            </li>
                            <li>
                                <ul>
                                    <li>Input: {props.memoryTest6.userInputNumbersString}</li>
                                    <li>Actual: {props.memoryTest6.correctNumberString}</li>
                                </ul>
                            </li>
                            <li>
                                <ul>
                                    <li>Input: {props.memoryTest7.userInputNumbersString}</li>
                                    <li>Actual: {props.memoryTest7.correctNumberString}</li>
                                </ul>
                            </li>
                            <li>
                                <ul>
                                    <li>Input: {props.memoryTest8.userInputNumbersString}</li>
                                    <li>Actual: {props.memoryTest8.correctNumberString}</li>
                                </ul>
                            </li>
                        </ol>
                        </Grid>
                        <Grid item xs={6}>
                            <h5>Reaction Time Tests:</h5>
                            <ol>
                                <li>Time: {props.reactionTimeTest1}ms</li>
                                <li>Time: {props.reactionTimeTest2}ms</li>
                                <li>Time: {props.reactionTimeTest3}ms</li>
                                <li>Time: {props.reactionTimeTest4}ms</li>
                                <li>Time: {props.reactionTimeTest5}ms</li>
                            </ol>
                        </Grid>
                    </Grid>
                    </div>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    );
}

export default ArchiveFile;