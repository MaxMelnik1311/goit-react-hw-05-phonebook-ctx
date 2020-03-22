import React, { Component } from 'react';
import T from 'prop-types';
import withThemeContext from '../../HOC/withThemeContext';
import styles from '../../styles.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  propTypes = {
    submitContactInfo: T.func.isRequired,
    night: T.bool.isRequired,
  };

  handleInputChange = e => {
    e.preventDefault();
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.submitContactInfo(this.state.name, this.state.number);

    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    const { night } = this.props;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h3 className={night && styles.night}>Name</h3>
          <input
            type="name"
            value={name}
            onChange={this.handleInputChange}
            name="name"
          />
          <h3 className={night && styles.night}>Number</h3>
          <input
            type="number"
            value={number}
            onChange={this.handleInputChange}
            name="number"
          />
          <button type="submit">Add contact</button>
        </form>
      </div>
    );
  }
}

export default withThemeContext(ContactForm);
