import React from 'react';
import ContactListItem from '../ContactListItem';
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

export default ContactList;
