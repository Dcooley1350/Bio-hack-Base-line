import React from 'react';

const MemTestNumber = (props) => {
    const textAlignStyles = {
        textAlign: 'center',
    }
    return (  
        <div style={textAlignStyles}>
            <h1>{props.memNumber}</h1>
        </div>
    );
}
 
export default MemTestNumber;