import React from 'react';
import shortid from 'shortid';
import style from './ContactListItem.module.css';

const ContactListItem = ({ id, listItem, onDeleteContact }) => (
  <li className={style.item}>
    {listItem.map(value => (
      <span className={style.info} key={shortid.generate()}>
        {value}
      </span>
    ))}
    <button
      type="button"
      className={style.button}
      onClick={() => onDeleteContact(id)}
    >
      Delete
    </button>
  </li>
);
export default ContactListItem;
