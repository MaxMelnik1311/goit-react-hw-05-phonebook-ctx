import React from 'react';
import ThemeContext from '../context/ThemeContext';

const withThemeContext = WrappedComponent => {
  return function WithThemeContext(props) {
    return (
      <ThemeContext.Consumer>
        {({ night, onToggle }) => (
          <WrappedComponent {...props} night={night} onToggle={onToggle} />
        )}
      </ThemeContext.Consumer>
    );
  };
};

export default withThemeContext;
