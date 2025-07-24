import React from "react";

function Button({ colorName, setColor }) {
    return (
        <button
            className='btn outline-none px-6 py-1 rounded shadow-2xl text-white'
            style={{ backgroundColor: colorName }}
            onClick={() => setColor(colorName)}
        >
            {colorName}
        </button>
    );
}

export default Button;
