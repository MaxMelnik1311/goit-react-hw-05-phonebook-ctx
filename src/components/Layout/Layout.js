import React from 'react';
import T from 'prop-types';
import withThemeContext from '../../HOC/withThemeContext';
import styles from '../../styles.module.css';

const Layout = ({ children, night }) => (
  <div className={night ? styles.layoutNight : styles.layoutDay}>
    <div className={styles.container}>{children}</div>
  </div>
);

Layout.propTypes = {
  night: T.bool.isRequired,
  children: T.shape.isRequired,
};

export default withThemeContext(Layout);
