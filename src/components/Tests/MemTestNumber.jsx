import React from 'react';

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
        console.log(this.props);
        return (
            <div id="slideSource" style={textAlignStyles}>
                <h1>{this.props.id}</h1>
            </div>


        );
    };

}

export default MemTestNumber;