import React from 'react'

const Button=(props) => {
    let message = "Click Me please mister " + props.text;
    return (
    <button className='button'>{message}</button>
    )
};

export default Button;