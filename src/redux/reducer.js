import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    contacts: [],
    filter: ''
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContact: (state, action) => {
            const existingContact = state.contacts.find(contact => contact.name === action.payload.name);
            
            if (!existingContact) {
                state.contacts.push(action.payload);
            } else {
                alert("Contact already exists");
            }
        },
        deleteContact: (state, action) => {
            state.contacts = state.contacts.filter(contacts => contacts.id !== action.payload)
        },
        setFilter: (state, action) => {
            state.filter = action.payload
        }
    }
});

export const { addContact, deleteContact, setFilter } = contactsSlice.actions;

export default contactsSlice.reducer;


