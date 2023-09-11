import React from 'react'
/**
 * Allow the dynamique naming of the component
 */
import style from'./Button.module.css'
/**
 * Define the propTypes for the component and allow the parent to have the declaration
 */
import PropTypes from 'prop-types'


const Button=(props) => {
    let message = "Please click me Mr " + props.text;
    return (
    <button className={style.Button} style={{backgroundColor: props.bgcolor}}>{message}</button>
    )
};

Button.propTypes={
    /**
     * Define proptypes and mandatory fields
     */
    text: PropTypes.string.isRequired,
    bgcolor: PropTypes.oneOf(['blue','green','tomato','transparent']),
    color: PropTypes.string,
}

/**
 * Default props in case they are not given by the parent in the props
 */
Button.defaultProps={
    bgcolor: 'blue'
}

export default Button