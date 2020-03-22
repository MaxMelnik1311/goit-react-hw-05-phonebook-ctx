import React, { Component } from 'react';
import shortid from 'shortid';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import T from 'prop-types';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import ThemeToggler from '../components/ThemeToggler/ThemeToggler';
import withThemeContext from '../HOC/withThemeContext';
import styles from '../styles.module.css';

import isNameAvailable from '../functions/isNameAvailable';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  propTypes = {
    night: T.bool.isRequired,
  };

  addContact = (name, number) => {
    const notyf = new Notyf();
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    if (isNameAvailable(this.state.contacts, contact.name)) {
      return notyf.error(`${contact.name} is already exists in contacts!`);
    }

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, contact],
      };
    });
  };

  deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId),
      };
    });

    if (this.state.contacts.length <= 2) {
      this.setState({ filter: '' });
    }
  };

  changeFilter = filter => {
    this.setState({ filter });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  render() {
    const { filter, contacts } = this.state;
    const { night } = this.props;
    const visibleContacts = this.getVisibleContacts();
    return (
      <div>
        <h1 className={night && styles.night}>Phonebook</h1>
        <ThemeToggler />
        <ContactForm submitContactInfo={this.addContact} />
        <h2 className={night && styles.night}>Contacts</h2>

        {contacts.length >= 2 && (
          <Filter value={filter} onChangeFilter={this.changeFilter} />
        )}
        <ContactList
          list={visibleContacts}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default withThemeContext(App);
