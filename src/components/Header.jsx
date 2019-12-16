import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import BioHackLogo from './../img/BioHackBaseLineLogoWhite.png'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux';

const headerStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    menuButton: {
        marginRight: 'auto',
        marginLeft: '15px',
        padding: '0',
        paddingTop: '5px'
    },
    title: {
        flexGrow: 1,
    },
    imageStyle: {
        width: '50px',
        height: '50px'
    },
    linkStyle: {
        textDecoration: 'none',
        color: 'white',
    },
    toolBarStyle: {
        backgroundColor: '#204969',
        display: 'flex',
        justifyContent: 'flex-end'
    },
    buttonStyle: {
        alignSelf: 'flex-start'
    },
}));






const Header = (props) => {
    
    function AuthorizationLinksConditionRender() {
        //PLACE CONDITION SIGNEDINSIGNEDOUT HERE!!!!!
        if (props.currentUser.email != null) {
            return (<div><SignedInLinks /></div>);
        }
        else {
            return (<div><SignedOutLinks /></div>);
        }
    };

    const classes = headerStyles();

    return (

        <div className={classes.root}>
            <AppBar position='sticky'>
                <Toolbar className={classes.toolBarStyle}>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <Link className={classes.linkStyle} to='/'><img className={classes.imageStyle} src={BioHackLogo} alt='BioHack logo' /></Link>
                    </IconButton>
                    {AuthorizationLinksConditionRender()}
                </Toolbar>
            </AppBar>
        </div>
      );
}

const mapStateToProps = (state) => {
    return { 
        currentUser: state.currentUser
    }
}
 
export default connect(mapStateToProps)(Header);