import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://connections-api.herokuapp.com' }),
  tagTypes:['users'],
  endpoints: (builder) => ({
    getUser: builder.mutation({
      query: (user) => ({
        url: `/users/current`,
        method: 'POST',
        body: {
          token: user.token,
        },
      }),
      providesTags: ['users'],
    }),
    addUser: builder.mutation({
      query: (newUser) => ({
        url: `/users/signup`,
        method: 'POST',
        body: {
          name: newUser.name,
          email: newUser.email,
          password: newUser.password,
        },
      }),
      invalidatesTags: ['users'],
    }),
    signInUser: builder.query({
      query: (usersData) => ({
        url: `/users/login`,
        method: 'POST',
        body: {
          email: usersData.email,
          password: usersData.password,
        },
      }),
      invalidatesTags: ['users'],
    }),
    logOutUser: builder.query({
      query: (usersData) => ({
        url: `/users/logout`,
        method: 'POST',
        body: {
          token: usersData.token,
        },
      }),
      invalidatesTags: ['users'],
    }),
  }),
});

export const {
  useGetUserQuery,
  useAddUserMutation,
  useSignInUserQuery,
  useLogOutUserQuery } = authApi;