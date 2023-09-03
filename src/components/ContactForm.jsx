import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../redux/api";
import { nanoid } from 'nanoid';
import { selectContacts } from "../redux/selectors";

const ContactForm = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const contacts = useSelector(selectContacts);

    const handleSubmit = e => {
        e.preventDefault();
        const existingContact = contacts.find(contact => contact.name === name);

        if (existingContact) {
            alert("Contact already exists");
        } else {
            dispatch(addContact({ id: nanoid(), name, number }));
            setName('');
            setNumber('');
        }
    };

    return (
        <form
            className="submit_form"
            onSubmit={handleSubmit}>
            <label className="label">
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
            </label>
            <label className="label">
                <input
                    type="tel"
                    placeholder="Number"
                    value={number}
                    onChange={e => setNumber(e.target.value)}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
            </label>
            <button type="submit" className="submit_btn">Add Contact</button>
        </form>
    );
};

export default ContactForm;
