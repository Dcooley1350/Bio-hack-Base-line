import React from 'react';
import AirplaneIcon from '@material-ui/icons/AirplanemodeActive';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import CakeIcon from '@material-ui/icons/Cake';
import FlowerIcon from '@material-ui/icons/FilterVintage';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import HouseIcon from '@material-ui/icons/House';
import StarIcon from '@material-ui/icons/Grade';
import FlagIcon from '@material-ui/icons/Flag';
import LightningIcon from '@material-ui/icons/FlashOn';
import HeartIcon from '@material-ui/icons/Favorite';
import TriangleIcon from '@material-ui/icons/ChangeHistory';
import SnowIcon from '@material-ui/icons/AcUnit';


const ReactionTimeIcon = (props) => {
    const iconStyles = {
        height: 100,
        width: 100
    }
    function conditionalIconAssignment(){
        console.log(props);
        switch(props.iconAssignment){
            case 1:
                return (<AirplaneIcon style={iconStyles}/>);
            case 2:
                return (<AirportShuttleIcon style={iconStyles}/>);
            case 3:
                return (<CakeIcon style={iconStyles}/>);
            case 4:
                return (<FlowerIcon style={iconStyles}/>);
            case 5:
                return (<WbSunnyIcon style={iconStyles}/>);
            case 6:
                return (<TriangleIcon style={iconStyles}/>);
            case 7:
                return (<HouseIcon style={iconStyles}/>);
            case 8:
                return (<StarIcon style={iconStyles}/>);
            case 9:
                return (<FlagIcon style={iconStyles}/>);
            case 10:
                return (<LightningIcon style={iconStyles}/>);
            case 11:
                return(<HeartIcon style={iconStyles}/>);
            case 12:
                return(<SnowIcon style={iconStyles}/>);
                default:
                    return(<h1>Something went wrong in icon Render!</h1>);
        }
    }

    function handleIconClick(event){
        event.preventDefault();
        console.log(props);
        console.log(props.IconAssignment, props.correctIcon)
        if(props.iconAssignment == props.correctIcon){
            console.log("CORRECTICON");
            props.handleCorrectIconClick();
            //Stop the timer, send the data, do the things!!!!!
        }
    }
    return ( 
        <div onClick={handleIconClick}>
            {conditionalIconAssignment()}
        </div>
     );
}
 
export default ReactionTimeIcon;