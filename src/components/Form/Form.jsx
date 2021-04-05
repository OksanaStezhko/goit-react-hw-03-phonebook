import React, { Component } from 'react';
import style from './Form.module.css';

import shortid from 'shortid';

class Form extends Component {
  state = { name: '', number: '' };
  contactId = shortid.generate();
  numberId = shortid.generate();

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmitForm(this.state);
    this.resetForm();
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={style.form} onSubmit={this.handleSubmit}>
        <label className={style.label} htmlFor={this.contactId}>
          Name:
          <input
            className={style.input}
            type="text"
            name="name"
            id={this.contactId}
            value={name}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label className={style.label} htmlFor={this.numberId}>
          Number:
          <input
            className={style.input}
            type="tel"
            name="number"
            id={this.numberId}
            value={number}
            onChange={this.handleChange}
            pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
            title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
            required
          />
        </label>
        <button className={style.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default Form;
