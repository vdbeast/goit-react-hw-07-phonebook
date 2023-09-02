import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import ContactItem from "./ContactItem";
import PropTypes from "prop-types";
import { deleteContact } from "../redux/reducer";
import { selectContacts, selectFilter } from "../redux/selectors";

const ContactList = ({ onDelete }) => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch()

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDeleteContact = useCallback(contactId => {
    dispatch(deleteContact(contactId));
  }, [dispatch]);

  return (
    <ul>
      {filteredContacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} onDelete={handleDeleteContact} />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  onDelete: PropTypes.func,
};

export default ContactList;