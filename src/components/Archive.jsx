import React from 'react';
import SideBar from './SideBar';
import ArchiveFileController from './ArchiveFileController'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { getTestsFromFirebase } from './../actions/index';
import { connect } from 'react-redux';


class Archive extends React.Component{
    constructor(props){
        super(props);
    }
    
    componentWillMount(){
        console.log(this.props);
        let userId = this.props.currentUser.uid;
        console.log(userId);
        getTestsFromFirebase(userId)(this.props.dispatch);
    }
    
    render(){
            const root = {
                height: '93vh',
                width: '100%'
            }
        return (
                <Grid container spacing='0' className={root}>
                    <Grid item xs={2} className={root}>
                        <SideBar currentRouterPath={this.props.currentRouterPath}/>
                    </Grid>
                    <Grid item xs={10} className={root}>
                        <ArchiveFileController/>
                    </Grid>
                </Grid>
        );

    }
}
const mapStateToProps = (state) => {
    console.log(state);
    return ({ 
        currentUser: state.currentUser,
        testsById: state.testsById,
    })
}

export default connect(mapStateToProps)(Archive);