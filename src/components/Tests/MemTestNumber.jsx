import React from 'react';
import './MemTestNumber.css'

class MemTestNumber extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
    
        const textAlignStyles = {
            textAlign: 'center',
        }
        const numberStyles= {
            fontSize: '100px'
        }
        console.log(this.props);
        return (
            <div id="slideSource" style={textAlignStyles}>
                <h3 style={numberStyles}>{this.props.id}</h3>
            </div>


        );
    };

}

export default MemTestNumber;