import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import * as phonebookApi from '../Components/api/api';
import * as phonebookActions from "./actions";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async () => {
    try {
      const { data } = await axios.get("/contacts");
      return data;
    } catch (error) {
      return error;
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async ({ name, number }) => {
    const contact = { name, number };
    try {
      const { data } = await phonebookApi.addContact(contact);
      return data;
    } catch (error) {
      return error;
    }
  }
);

export const deleteContact = (contactId) => (dispatch) => {
  dispatch(phonebookActions.deleteContactRequest());
  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(phonebookActions.deleteContactSuccess(contactId)))
    .catch((error) => dispatch(phonebookActions.deleteContactError(error)));
};