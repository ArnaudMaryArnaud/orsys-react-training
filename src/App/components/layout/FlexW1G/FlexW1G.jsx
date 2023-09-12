import React from 'react';
import PropTypes from "prop-types";
import styles from "./FlexW1G.module.css";

const FlexW1G = (props) => {
    return (
        <div classeName={styles.FlexW1G} data-testid="FlexW1G">
            {props.children}
        </div>
    );
};

FlexW1G.propTypes = {
    children: PropTypes.any.isRequired,
};

FlexW1G.defaultProps = {
    children: <div>FlexW1G layout empty component</div>,
};

export default FlexW1G;