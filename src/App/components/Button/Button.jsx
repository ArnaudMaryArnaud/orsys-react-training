import React from 'react'
import style from'./Button.module.css'

const Button=(props) => {
    let message = "Click Me please mister " + props.text;
    return (
    <button className={style.Button}>{message}</button>
    )
};

export default Button;