import React, { useState } from 'react';

const colors = [
    "#FF5733", "#33FF57", "#3357FF", "#F333FF",
    "#33FFF5", "#F5FF33", "#FF33A1", "#A133FF",
    "#FF8C33", "#33FF8C", "#8C33FF", "#FF338C",
    "#33FFA1", "#A1FF33", "#FF5733", "#33FF57"
];

function randomColor(colors) {
    const newColorIndex = Math.floor(Math.random() * colors.length);
    return colors[newColorIndex];
}

function Box() {
    const [backgroundColor, setBackgroundColor] = useState(randomColor(colors));

    const boxStyle = {
        width: '200px',
        height: '200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '2px solid blue',
        borderRadius: '10px',
        backgroundColor: backgroundColor
    };

    function changeBoxColor() {
        setBackgroundColor(randomColor(colors));
    }

    return (
        <div style={boxStyle} onClick={changeBoxColor}>
            <p></p>
        </div>
    );
}

export default Box;
