import React from 'react';

const ReactionTimePrompt = (props) => {
    console.log(props);
    function promptConditionalRender(){
        switch(props.correctIcon){
            case 1:
                return("Plane");
            case 2:
                return("Van");
            case 3:
                return("Cake");
            case 4:
                return("Flower");
            case 5:
                return("Sun");
            case 6:
                return("Triangle");
            case 7:
                return("House");
            case 8:
                return("Star");
            case 9:
                return("Flag");
            case 10:
                return("Lightning Bolt");
            case 11:
                return("Heart");
            case 12:
                return("SnowFlake");
        }
    }
    return (
        <div>
            <h2>Click the {promptConditionalRender()}</h2>
        </div>
    );
}
 
export default ReactionTimePrompt;