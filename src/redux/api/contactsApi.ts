import { baseApi } from "./baseApi";

const contactsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => ({
        url: "/contacts",
        method: "GET",
      }),
      providesTags: ["contacts"],
    }),

    deleteContact: builder.mutation({
      query: (id) => ({
        url: `/contacts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["contacts"],
    }),
  }),
});

export const { useGetContactsQuery, useDeleteContactMutation } = contactsApi;
