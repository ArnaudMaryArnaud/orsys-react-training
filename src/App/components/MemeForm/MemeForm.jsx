import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./MemeForm.module.css";

const MemeFormInitialState = {};
const MemeForm = (props) => {
  useEffect(() => {
    console.log("montage de MemeForm");
  }, []);
  const [state, setstate] = useState(MemeFormInitialState);
  return (
    <div className={styles.MemeForm} data-testid="MemeForm">
      MemeForm Component
    </div>
  );
};

MemeForm.propTypes = {};

MemeForm.defaultProps = {};

export default MemeForm;
