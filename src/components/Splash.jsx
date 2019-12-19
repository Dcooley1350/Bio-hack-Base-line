import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import BioHackLogo from './../img/BiohackBaselineLogo.png'

const Splash = () => {
    const splashStyles= makeStyles(() => ({
        bio: {
            fontFamily: 'Bebas Neue',
            fontSize: '150px'
        },
        base: {
            fontFamily: 'Sulphur Point'
        },
        imageStyle: {
            height: '50%',
            width: '50%',
            z: -1,
            margin: 'auto'
        },
        alignCenter: {
            textAlign: 'center'
        }
    
    }
    ));
    const classes = splashStyles()

    return (
        <div className={classes.alignCenter}>
            <h1><span className={classes.bio}>BioHack</span><u> <span className={classes.bio}>BaseLine</span></u></h1>
            <img className={classes.imageStyle} src={BioHackLogo} alt="an image of a brain with circuitry"/>
        </div>
         );
}
 
export default Splash;