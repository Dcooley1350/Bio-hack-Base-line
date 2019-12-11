import React from 'react';
import { makeStyles } from '@material-ui/core/styles'

const Splash = () => {
    const splashStyles= makeStyles(() => ({
        bio: {
            fontFamily: 'Bebas Neue',
        },
        base: {
            fontFamily: 'Sulphur Point'
        }
    
    }
    ))
    return (
         <h1><span>BioHack</span><span>BaseLine</span></h1>
         );
}
 
export default Splash;