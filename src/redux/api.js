import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://64f31424edfa0459f6c64574.mockapi.io";

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkApi) => {
        try {
            const response = await axios.get("/contacts");
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue(error.message)
        }
    }
);

export const addContacts = createAsyncThunk(
    "contacts/addContact",
    async (contactData,thunkApi) => {
        try {
            const response = await axios.post("/contacts",contactData);
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue(error.message)
        }
    }
);

export const deleteContacts = createAsyncThunk(
    "contacts/deleteContact",
    async (id, thunkApi) => {
        try {
            const response = await axios.delete(`/contacts/${id}`);
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue(error.message)
        }
    }
)