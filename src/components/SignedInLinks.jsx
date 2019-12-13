import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';

const signedInLinkStyles = makeStyles( (theme) => ({
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
const SignedInLinks = () => {

    const classes = signedInLinkStyles()
    return (  
        <div>
            <NavLink className={classes.linkStyle} to='/Test'><Button className={classes.buttonStyle} color="inherit"><Typography variant="h6">Test</Typography></Button></NavLink>
            <NavLink className={classes.linkStyle} to='/Dashboard'><Button className={classes.buttonStyle} color="inherit"><Typography variant="h6">Dashboard</Typography></Button></NavLink>
            <NavLink className={classes.linkStyle} to='/Archive'><Button className={classes.buttonStyle} color="inherit"><Typography variant="h6">Archive</Typography></Button></NavLink>
            <Link className={classes.linkStyle} to='Analysis'><Button className={classes.buttonStyle} color="inherit"><Typography variant="h6">Analysis</Typography></Button></Link>
            <Link className={classes.linkStyle} to='SignOut'><Button className={classes.buttonStyle} color="inherit"><Typography variant="h6">SignOut</Typography></Button></Link>
        </div>
    );
}
 
export default SignedInLinks;