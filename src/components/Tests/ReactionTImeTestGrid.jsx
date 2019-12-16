import React from 'react';
import Grid from '@material-ui/core/Grid';
import ReactionTimeIcon from './ReactionTimeIcon'

const ReactionTimeTestGrid = (props) => {
    console.log(props)
    const [ icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon9, icon10, icon11, icon12 ] = props.iconAssignment;

    const gridBoxStyle= {
        height: '20vh'
    }
    return ( 
    <div>
        <Grid container>
            <Grid style={gridBoxStyle} item xs={3}>
                <ReactionTimeIcon handleCorrectIconClick={props.handleCorrectIconClick} iconAssignment={icon1} correctIcon={props.correctIcon}  />
            </Grid>
            <Grid style={gridBoxStyle} item xs={3}>
                    <ReactionTimeIcon handleCorrectIconClick={props.handleCorrectIconClick} iconAssignment={icon2} correctIcon={props.correctIcon} />
            </Grid>
            <Grid style={gridBoxStyle} item xs={3}>
                    <ReactionTimeIcon handleCorrectIconClick={props.handleCorrectIconClick} iconAssignment={icon3} correctIcon={props.correctIcon} />
            </Grid>
            <Grid style={gridBoxStyle} item xs={3}>
                    <ReactionTimeIcon handleCorrectIconClick={props.handleCorrectIconClick} iconAssignment={icon4} correctIcon={props.correctIcon} />
            </Grid>
        </Grid>
        <Grid container>
            <Grid style={gridBoxStyle} item xs={3}>
                    <ReactionTimeIcon handleCorrectIconClick={props.handleCorrectIconClick} iconAssignment={icon5} correctIcon={props.correctIcon} />
            </Grid>
            <Grid style={gridBoxStyle} item xs={3}>
                    <ReactionTimeIcon handleCorrectIconClick={props.handleCorrectIconClick} iconAssignment={icon6} correctIcon={props.correctIcon} />
            </Grid>
            <Grid style={gridBoxStyle} item xs={3}>
                    <ReactionTimeIcon handleCorrectIconClick={props.handleCorrectIconClick} iconAssignment={icon7} correctIcon={props.correctIcon} />
            </Grid>
            <Grid style={gridBoxStyle} item xs={3}>
                    <ReactionTimeIcon handleCorrectIconClick={props.handleCorrectIconClick} iconAssignment={icon8} correctIcon={props.correctIcon} />
            </Grid>
        </Grid>
        <Grid container>
            <Grid style={gridBoxStyle} item xs={3}>
                    <ReactionTimeIcon handleCorrectIconClick={props.handleCorrectIconClick} iconAssignment={icon9} correctIcon={props.correctIcon} />
            </Grid>
            <Grid style={gridBoxStyle} item xs={3}>
                    <ReactionTimeIcon handleCorrectIconClick={props.handleCorrectIconClick} iconAssignment={icon10} correctIcon={props.correctIcon} />
            </Grid>
            <Grid style={gridBoxStyle} item xs={3}>
                    <ReactionTimeIcon handleCorrectIconClick={props.handleCorrectIconClick} iconAssignment={icon11} correctIcon={props.correctIcon} />
            </Grid>
            <Grid style={gridBoxStyle} item xs={3}>
                    <ReactionTimeIcon handleCorrectIconClick={props.handleCorrectIconClick} iconAssignment={icon12} correctIcon={props.correctIcon} />
            </Grid>
        </Grid>
    </div> 
    );
}
 
export default ReactionTimeTestGrid;