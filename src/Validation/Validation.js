import React from 'react'

const Validate = props => {
    let warning = props.length < 6 ? 'Text too short!' : 'Text long enough' ;
    return <p>{warning}</p>;
}

export default Validate;