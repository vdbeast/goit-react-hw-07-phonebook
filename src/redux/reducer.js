import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./api";

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
        // addContact: (state, action) => {
        //     const existingContact = state.contacts.items.find(contact => contact.name === action.payload.name);
            
        //     if (!existingContact) {
        //         state.contacts.items.push(action.payload);
        //     } else {
        //         alert("Contact already exists");
        //     }
        // },
        // deleteContact: (state, action) => {
        //     state.contacts = state.contacts.items.filter(contacts => contacts.id !== action.payload)
        // },
        setFilter: (state, action) => {
            state.filter = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.pending, handlePending)
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.contacts.isLoading = false;
                state.contacts.error = null;
                state.contacts.items = action.payload;
            })
            .addCase(fetchContacts.rejected, handleRejected)
            .addCase(addContact.pending, handlePending)
            .addCase(addContact.fulfilled, (state, action) => {
                state.contacts.isLoading = false;
                state.contacts.error = null;
                state.contacts.items.push(action.payload);
            })
            .addCase(addContact.rejected, handleRejected)
            .addCase(deleteContact.pending, handlePending)
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.contacts.isLoading = false;
                state.contacts.error = null;
                state.contacts.items = state.contacts.items.filter(
                    (contact) => contact.id !== action.payload
                );
            })
            .addCase(deleteContact.rejected, handleRejected);
    }
});

export const { setFilter } = contactsSlice.actions;

export default contactsSlice.reducer;


