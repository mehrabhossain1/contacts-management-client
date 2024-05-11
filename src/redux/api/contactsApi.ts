import { baseApi } from "./baseApi";

const contactsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createContact: builder.mutation({
      query: (data) => ({
        url: "/contacts",
        method: "POST",
        data,
      }),
      invalidatesTags: ["contacts"],
    }),

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

export const {
  useCreateContactMutation,
  useGetContactsQuery,
  useDeleteContactMutation,
} = contactsApi;
