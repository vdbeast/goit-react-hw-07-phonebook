import React from "react";
import PropTypes from 'prop-types';

const ContactItem = ({ contact, onDelete }) => {
    return (
        <li>
            {contact.name}: {contact.number}
            <button className="delete_btn" onClick={() => onDelete(contact.id)}>Delete</button>
        </li>
)}

ContactItem.propTypes = {
    contact: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }).isRequired,
    onDelete: PropTypes.func,
}

export default ContactItem;
