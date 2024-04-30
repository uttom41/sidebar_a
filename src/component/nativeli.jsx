
import React from "react";


const NativeLI = ({ style, children }) => {

    const defaultStyle = {
        height: '50px',
        marginTop: '10px',
        listStyle: 'none',
        display: 'flex',
        alignItems: 'center',
    };

    const mergedStyle = { ...defaultStyle, ...style };

    return (
        <ul style={mergedStyle}>
            {children}
        </ul>
    );

}


export default NativeLI;