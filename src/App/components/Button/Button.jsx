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
    <button className={style.Button} 
    /**
     * order matter, the last one wins in case of duplicate properties
     */
    style={{backgroundColor: props.bgcolor, ...props.style, color: props.color}}>{message}</button>
    )
};

Button.propTypes={
    /**
     * Define proptypes and mandatory fields
     */
    text: PropTypes.string.isRequired,
    bgcolor: PropTypes.oneOf(['blue','green','tomato','transparent']),
    color: PropTypes.string,
    style: PropTypes.shape({
        width: PropTypes.string,
        padding: PropTypes.string,
    })
}

/**
 * Default props in case they are not given by the parent in the props
 */
Button.defaultProps={
    bgcolor: 'blue',
    color: 'white'
}

export default Button