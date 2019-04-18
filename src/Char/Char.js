import React from 'react'

const Char = props => {
    const style = {
        display: 'inline-block',
        padding: '16px',
        textAlign: 'center',
        margin: '16px',
        border: '1px solid black'
    };
    return <p onClick={props.deleteHandler} style={style}>{props.inputText}</p>
};

export default Char;