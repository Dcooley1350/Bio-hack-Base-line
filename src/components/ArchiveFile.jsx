import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const archiveFileStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontsize: '12px',
        flexBasis: '33.33%',
        flexShrink: 0
    },
    sexondaryHeading: {
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
                    <Typography className={classes.heading}>{props.date}, {props.time}</Typography>
                    <Typography className={classes.secondaryHeading}>Exp. Condition: {props.expCondition} </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>Experimental Condition: {props.expConditionNotes}</Typography>
                    <Typography>Control Condition: {props.ctrlCondition}</Typography>
                    <Typography>Control Condition Notes: {props.ctrlConditionNotes}</Typography>
                    <Typography>Control Condition Notes: {props.ctrlConditionNotes}</Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
            );
        }
         
export default ArchiveFile;