import React from 'react';
import PropTypes from "prop-types";
import styles from "./FlexH3G.module.css";

const FlexH3G = (props) => {
    return (
        <div className={styles.FlexH3G} data-testid="FlexH3G">
            {props.children}
        </div>
    );
};

FlexH3G.propTypes = {
    children: PropTypes.any.isRequired,
};

FlexH3G.defaultProps = {
    children: <div>FlexH3G layout empty component</div>,
};

export default FlexH3G;