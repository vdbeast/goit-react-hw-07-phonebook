import { createSlice } from "@reduxjs/toolkit";
import { addContacts, deleteContacts, fetchContacts } from "./api";

const initialState = {
    contacts: {
        items: [],
        isLoading: false,
        error: null
    },
    filter: ""
};

const handlePending = (state) => {
    state.isLoading = true
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload
}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContact: (state, action) => {
            const existingContact = state.contacts.items.find(contact => contact.name === action.payload.name);
            
            if (!existingContact) {
                state.contacts.items.push(action.payload);
            } else {
                alert("Contact already exists");
            }
        },
        deleteContact: (state, action) => {
            state.contacts = state.contacts.items.filter(contacts => contacts.id !== action.payload)
        },
        setFilter: (state, action) => {
            state.filter = action.payload
        }
    },
    extraReducers: {
        [fetchContacts.pending]:handlePending,
        [fetchContacts.fulfilled](state, action) {
            state.contacts.isLoading = false;
            state.contacts.error = null;
            state.contacts.items = action.payload;
        },
        [fetchContacts.rejected]: handleRejected,
        [addContacts.pending]:handlePending,
        [addContacts.fulfilled](state, action) {
            state.contacts.isLoading = false;
            state.contacts.error = null;
            state.contacts.items.push(action.payload);
        },
        [addContacts.rejected]: handleRejected,
        [deleteContacts.pending]:handlePending,
        [deleteContacts.fulfilled](state, action) {
            state.contacts.isLoading = false;
            state.contacts.error = null;
            state.contacts.items = state.contacts.items.filter(
                (contact) => contact.id !== action.payload
            );
        },
        [deleteContacts.rejected]:handleRejected,
    }
});

export const { addContact, deleteContact, setFilter } = contactsSlice.actions;

export default contactsSlice.reducer;


