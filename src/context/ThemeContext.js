import React, { Component, createContext } from 'react';
import T from 'prop-types';

const Context = createContext();

export default class ThemeContext extends Component {
  static Consumer = Context.Consumer;

  toggleTheme = () => {
    this.setState(prevState => ({ night: !prevState.night }));
  };

  state = {
    night: false,
    onToggle: this.toggleTheme,
  };

  propTypes = {
    children: T.shape.isRequired,
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
