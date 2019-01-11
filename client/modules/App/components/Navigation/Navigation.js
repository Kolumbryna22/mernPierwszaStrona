import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import styles from './Navigation.css';

var Navigation = (props, context) => {
  return (
    <div className="navigation">
      <Link to="/home" className={styles.navigationLink}>Home</Link>
      <Link to="/" className={styles.navigationLink}>Blog</Link>
      <Link to="/about" className={styles.navigationLink}>About</Link>
    </div>
  );
}

Navigation.propTypes = {
};

export default Navigation;
