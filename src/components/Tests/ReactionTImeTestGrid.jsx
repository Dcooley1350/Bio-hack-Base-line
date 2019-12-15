import React from 'react';
import Grid from '@material-ui/icons';
import ReactionTimeIcon from './ReactionTimeIcon'

const ReactionTimeTestGrid = (props) => {
    const { icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon9, icon10, icon11, icon12} = this.props.iconAssignment;
    return ( 
    <div>
        <Grid container>
            <Grid item xs={3}>
                <ReactionTimeIcon onCLick={props.handleCorrectIconClick} iconAssignment={icon1} />
            </Grid>
            <Grid item xs={3}>
                <ReactionTimeIcon onCLick={props.handleCorrectIconClick} iconAssignment={icon2} />
            </Grid>
            <Grid item xs={3}>
                <ReactionTimeIcon onCLick={props.handleCorrectIconClick} iconAssignment={icon3} />
            </Grid>
            <Grid item xs={3}>
                <ReactionTimeIcon onCLick={props.handleCorrectIconClick} iconAssignment={icon4} />
            </Grid>
        </Grid>
        <Grid container>
            <Grid item xs={3}>
                <ReactionTimeIcon onCLick={props.handleCorrectIconClick} iconAssignment={icon5} />
            </Grid>
            <Grid item xs={3}>
                <ReactionTimeIcon onCLick={props.handleCorrectIconClick} iconAssignment={icon6} />
            </Grid>
            <Grid item xs={3}>
                <ReactionTimeIcon onCLick={props.handleCorrectIconClick} iconAssignment={icon7} />
            </Grid>
            <Grid item xs={3}>
                <ReactionTimeIcon onCLick={props.handleCorrectIconClick} iconAssignment={icon8} />
            </Grid>
        </Grid>
        <Grid container>
            <Grid item xs={3}>
                <ReactionTimeIcon onCLick={props.handleCorrectIconClick} iconAssignment={icon9} />
            </Grid>
            <Grid item xs={3}>
                <ReactionTimeIcon onCLick={props.handleCorrectIconClick} iconAssignment={icon10} />
            </Grid>
            <Grid item xs={3}>
                <ReactionTimeIcon onCLick={props.handleCorrectIconClick} iconAssignment={icon11} />
            </Grid>
            <Grid item xs={3}>
                <ReactionTimeIcon onCLick={props.handleCorrectIconClick} iconAssignment={icon12} />
            </Grid>
        </Grid>
    </div> 
    );
}
 
export default ReactionTimeTestGrid;