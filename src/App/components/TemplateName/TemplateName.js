import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./TemplateName.module.css";

const TemplateNameInitialState = {};
const TemplateName = (props) => {
  useEffect(() => {
    console.log("montage de TemplateName");
  }, []);
  const [state, setstate] = useState(TemplateNameInitialState);
  return (
    <div className={styles.TemplateName} data-testid="TemplateName">
      TemplateName Component
    </div>
  );
};

TemplateName.propTypes = {};

TemplateName.defaultProps = {};

export default TemplateName;
