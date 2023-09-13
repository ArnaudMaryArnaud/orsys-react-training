import React from 'react';
import PropTypes from 'prop-types';
import styles from './WelcomePage.module.css';

const WelcomePage = () => (
  <div className={styles.WelcomePage} data-testid="WelcomePage">
    WelcomePage Component
  </div>
);

WelcomePage.propTypes = {};

WelcomePage.defaultProps = {};

export default WelcomePage;
