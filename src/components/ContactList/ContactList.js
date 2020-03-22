import React from 'react';
import T from 'prop-types';
import Contact from './Contact';
import withThemeContext from '../../HOC/withThemeContext';

function ContactList({ list, deleteContact }) {
  return (
    <ul>
      {list.map(({ id, name, number }) => (
        <Contact
          key={id}
          name={name}
          number={number}
          deleteContact={() => deleteContact(id)}
        />
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  list: T.arrayOf({}).isRequired,
  deleteContact: T.func.isRequired,
};

export default withThemeContext(ContactList);
