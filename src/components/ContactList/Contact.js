import React from 'react';
import T from 'prop-types';
import withThemeContext from '../../HOC/withThemeContext';
import styles from '../../styles.module.css';

function Contact({ name, number, id, deleteContact, night }) {
  return (
    <li>
      <p className={night && styles.night}>
        {name}: {number}
      </p>
      <button type="button" onClick={() => deleteContact(id)}>
        Delete {name} from contact list
      </button>
    </li>
  );
}

Contact.propTypes = {
  name: T.string.isRequired,
  number: T.number.isRequired,
  id: T.number.isRequired,
  deleteContact: T.func.isRequired,
  night: T.bool.isRequired,
};

export default withThemeContext(Contact);
