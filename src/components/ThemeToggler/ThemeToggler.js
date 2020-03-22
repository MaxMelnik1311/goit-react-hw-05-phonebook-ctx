import React from 'react';
import T from 'prop-types';
import withThemeContext from '../../HOC/withThemeContext';

const ThemeToggler = ({ night, onToggle }) => (
  <>
    <button type="button" onClick={onToggle}>
      {night ? 'Night Regime' : 'Day Regime'}
    </button>
  </>
);

ThemeToggler.propTypes = {
  night: T.bool.isRequired,
  onToggle: T.func.isRequired,
};

export default withThemeContext(ThemeToggler);
