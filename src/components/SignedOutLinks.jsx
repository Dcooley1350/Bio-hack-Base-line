import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const signedOutLinkStyles = makeStyles( () => ({
    title: {
        flexGrow: 1,
    },
    buttonStyle: {
        alignSelf: 'flex-start'
    },
    linkStyle: {
        textDecoration: 'none',
        color: 'white',
    },
}))

const SignedOutLinks = () => {
    const classes = signedOutLinkStyles();
    return (
        <div>
            <Link className={classes.linkStyle} to='SignIn'><Button className={classes.buttonStyle} color="inherit"><Typography variant="h6">SignIn</Typography></Button></Link>
            <Link className={classes.linkStyle} to='Register'><Button className={classes.buttonStyle} color="inherit"><Typography variant="h6">Register</Typography></Button></Link>
        </div>
      );
}
 
export default SignedOutLinks;