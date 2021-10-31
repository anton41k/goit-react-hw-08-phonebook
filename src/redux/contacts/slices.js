import { createSlice } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { fetchContacts, addContact, deleteContact } from "../contacts";

const contactsSlice = createSlice({
  name: "items",
  initialState: [],
  extraReducers: {
    [fetchContacts.fulfilled]: (_, { payload }) => payload,

    [addContact.fulfilled]: (state, { payload }) => [payload, ...state],

    [deleteContact.fulfilled]: (state, { payload }) => {
      return state.filter((contact) => contact.id !== payload);
    },
  },
});

const filterSlice = createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    setFilterValue: (_, { payload }) => payload,
  },
});
export const { setFilterValue } = filterSlice.actions;

const addNameContactSlice = createSlice({
  name: "nameNewContact",
  initialState: "",
  reducers: {
    setAddNameContact: (_, { payload }) => payload,
  },
});
export const { setAddNameContact } = addNameContactSlice.actions;

const errorSlice = createSlice({
  name: "error",
  initialState: null,
  extraReducers: {
    [fetchContacts.pending]: () => null,
    [fetchContacts.rejected]: (_, action) => action.error.message,

    [addContact.pending]: () => null,
    [addContact.rejected]: (_, action) => action.error.message,

    [deleteContact.pending]: () => null,
    [deleteContact.rejected]: (_, action) => action.error.message,
  },
});

const loadingSlice = createSlice({
  name: "isLoading",
  initialState: false,
  extraReducers: {
    [fetchContacts.pending]: () => true,
    [fetchContacts.fulfilled]: () => false,
    [fetchContacts.rejected]: () => false,

    [addContact.pending]: () => true,
    [addContact.fulfilled]: () => false,
    [addContact.rejected]: () => false,

    [deleteContact.pending]: () => true,
    [deleteContact.fulfilled]: () => false,
    [deleteContact.rejected]: () => false,
  },
});

const items = contactsSlice.reducer;
const filter = filterSlice.reducer;
const nameNewContact = addNameContactSlice.reducer;
const error = errorSlice.reducer;
const isLoading = loadingSlice.reducer;

export default combineReducers({
  items,
  filter,
  nameNewContact,
  error,
  isLoading,
});
