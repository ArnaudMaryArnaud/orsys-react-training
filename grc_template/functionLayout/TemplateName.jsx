import React from 'react';
import PropTypes from "prop-types";
import styles from "./TemplateName.module.css";

const TemplateName = (props) => {
    return (
        <div classeName={styles.TemplateName} data-testid="TemplateName">
            {props.children}
        </div>
    );
};

TemplateName.propTypes = {
    children: PropTypes.any.isRequired,
};

TemplateName.defaultProps = {
    children: <div>TemplateName layout empty component</div>,
};

export default TemplateName;