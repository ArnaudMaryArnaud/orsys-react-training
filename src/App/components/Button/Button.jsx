import React from 'react'
/**
 * Permet d'avoir un fichier css avec un nom dynamique
 */
import style from'./Button.module.css'

const Button=(props) => {
    let message = "Click Me please mister " + props.text;
    return (
    <button className={style.Button} style={{backgroundColor: props.bgcolor}}>{message}</button>
    )
};

export default Button;