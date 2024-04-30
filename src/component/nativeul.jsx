import React from "react";


const NativeUL = ({ style, children }) => {

    const defaultStyle = {
        listStyleType: "none",
        padding: 0,
        margin: 0
    };

    const mergedStyle = { ...defaultStyle, ...style };

    return (
        <ul style={mergedStyle}>
            {children}
        </ul>
    );

}


export default NativeUL;