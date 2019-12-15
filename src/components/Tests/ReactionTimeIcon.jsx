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
    function conditionalIconAssignment(){
        switch(props.iconAssignment){
            case 1:
                return(<AirplaneIcon/>);
            case 2:
                return(<AirportShuttleIcon/>);
            case 3:
                return(<CakeIcon/>);
            case 4:
                return(<FlowerIcon/>);
            case 5:
                return(<WbSunnyIcon/>);
            case 6:
                return(<TriangleIcon/>);
            case 7:
                return(<HouseIcon/>);
            case 8:
                return(<StarIcon/>);
            case 9:
                return(<FlagIcon/>);
            case 10:
                return(<LightningIcon/>);
            case 11:
                return(<HeartIcon/>);
            case 12:
                return(<SnowIcon/>);
                default:
                    return(<h1>Something went wrong in icon Render!</h1>);
        }
    }

    function handleIconClick(event){
        event.preventDefault();
        if(props.IconAssignment == props.correctIcon){
            //Stop the timer, send the data, do the things!!!!!
        }
    }
    return ( 
        <div onClick={handleIconClick}>
            {conditionalIconAssignment}
        </div>
     );
}
 
export default ReactionTimeIcon;