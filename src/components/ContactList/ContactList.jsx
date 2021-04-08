import React from 'react';
import ContactListItem from '../ContactListItem';
import PropTypes from 'prop-types';
import style from './ContactList.module.css';

const ContactList = ({ contactList, onDeleteContact }) => {
  return (
    <ul className={style.list}>
      {contactList.map(({ id, ...dataContact }) => (
        <ContactListItem
          key={id}
          id={id}
          listItem={Object.values(dataContact)}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contactList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
export default ContactList;
