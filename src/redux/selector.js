import { createSelector } from "@reduxjs/toolkit";

export const getItems = (state) => state.contacts.items;
export const getFilter = (state) => state.contacts.filter;

export const getContacts = createSelector(
  [getItems, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase().trim(" ");

      return contacts.filter(({ name }) =>
          name.toLowerCase().includes(normalizedFilter)
    );
  }
);