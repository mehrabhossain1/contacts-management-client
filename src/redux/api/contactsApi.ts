import { baseApi } from "./baseApi";

const contactsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createContact: builder.mutation({
      query: (data) => ({
        url: "/contacts",
        method: "POST",
        body: data,
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

    updateContact: builder.mutation({
      query: (data) => {
        console.log(data);
        return {
          url: `/contacts/${data}`,
          method: "PATCH",
        };
      },
      invalidatesTags: ["contacts"],
    }),
  }),
});

export const {
  useCreateContactMutation,
  useGetContactsQuery,
  useDeleteContactMutation,
  useUpdateContactMutation,
} = contactsApi;
