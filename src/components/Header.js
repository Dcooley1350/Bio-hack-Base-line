import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import BioHackLogo from './../img/BioHackBaseLineLogoWhite.png'

const headerStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    imageStyle: {
        width: '45px',
        height: '45px'
    },
    linkStyle: {
        textDecoration: 'none',
        color: 'white',
    },
    toolBarStyle: {
        backgroundColor: '#204969'
    },
    title: {
        flexGrow: 1,
    }
}));


const Header = () => {
    
    const classes = headerStyles();

    return (

        <div className={classes.root}>
            <AppBar position='sticky'>
                <Toolbar className={classes.toolBarStyle}>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <Link className={classes.linkStyle} to='/'><img className={classes.imageStyle} src={BioHackLogo} alt='BioHack logo' /></Link>
                    </IconButton>
                    <Link className={classes.linkStyle} to='Test'>
                            <Button color="inherit">
                                <Typography variant="h6" className={classes.title}>Test</Typography>
                            </Button>
                        </Link>
                    <Link className={classes.linkStyle} to='SignIn'><Button color="inherit"><Typography variant="h6">SignIn</Typography></Button></Link>
                    <Link className={classes.linkStyle} to='Register'><Button color="inherit"><Typography variant="h6">Register</Typography></Button></Link>
                </Toolbar>
            </AppBar>
        </div>
      );
}
 
export default Header;