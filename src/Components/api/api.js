import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export async function fetchContacts() {
  const { data } = await axios.get(`/contacts`);
  return data;
}

export async function addContact(contact) {
  return await axios.post(`./contacts`, contact);
}

export async function deleteContact(contactId) {
  return await axios.delete(`./contacts/${contactId}`);
}
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const phonebookApi = createApi({
//   reducerPath: 'phonebookApi',
//   baseQuery: fetchBaseQuery({ baseUrl: 'https://connections-api.herokuapp.com' }),
//   tagTypes:['contacts'],
//   endpoints: (builder) => ({
//     getContacts: builder.query({
//       query: () => `/contacts`,
//       providesTags: ['contacts'],
//     }),
//     addContact: builder.mutation({
//       query: (newContact) => ({
//         url: `/contacts`,
//         method: 'POST',
//         body: {
//           name: newContact.name,
//           number: newContact.number,
//         },
//       }),
//       invalidatesTags: ['contacts'],
//     }),
//     deleteContact: builder.mutation({
//       query: (contactId) => ({
//         url: `/contacts/${contactId}`,
//         method: 'DELETE',
//       }),
//       invalidatesTags: ['contacts'],
//     }),
//     getFilteredContacts: builder.query({
//       query: (name) => `/contacts?name=${name}`,
//       invalidatesTags: ['contacts'],
//     }),
//   }),
// });

// export const {
//   useGetContactsQuery,
//   useGetFilteredContactsQuery,
//   useDeleteContactMutation,
//   useAddContactMutation } = phonebookApi;