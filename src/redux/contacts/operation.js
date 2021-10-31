import { createAsyncThunk } from "@reduxjs/toolkit";
import * as contactsApi from "../../services/contactApi";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async () => {
    const contacts = await contactsApi.fetchContacts();
    return contacts;
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (newContact) => {
    const contact = await contactsApi.addContact(newContact);
    return contact;
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId) => {
    await contactsApi.deleteContact(contactId);
    return contactId;
  }
);
