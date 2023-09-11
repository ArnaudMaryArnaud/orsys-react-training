import React, { useEffect, useState } from "react";
/**
 * Allow the dynamique naming of the component
 */
import style from "./Button.module.css";
/**
 * Define the propTypes for the component and allow the parent to have the declaration
 */
import PropTypes from "prop-types";

const Button = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  useEffect(() => {
    setTimeout(() => {setIsClicked(false)}, 180);
  }, [isClicked])
  return (
    <button
      onClick={(evt) => {
        setIsClicked(true);
        props.onClick();
      }}
      className={isClicked ? style.Button + " " + style.clicked : style.Button}
      /**
       * order matter, the last one wins in case of duplicate properties
       */
      style={{
        backgroundColor: props.bgcolor,
        ...props.style,
        color: props.color,
      }}
    >
      {props.children}
    </button>
  );
};

Button.propTypes = {
  /**
   * Define proptypes and mandatory fields
   */
  children: PropTypes.any.isRequired,
  bgcolor: PropTypes.oneOf(["blue", "green", "tomato", "transparent"]),
  color: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  style: PropTypes.shape({
    width: PropTypes.string,
    padding: PropTypes.string,
  }),
};

/**
 * Default props in case they are not given by the parent in the props
 */
Button.defaultProps = {
  bgcolor: "blue",
  color: "white",
};

export default Button;
