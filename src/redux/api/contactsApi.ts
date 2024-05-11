import { baseApi } from "./baseApi";

const contactsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    contacts: builder.query({
      query: () => ({
        url: "/contacts",
        method: "GET",
      }),
    }),
  }),
});

export const { useContactsQuery } = contactsApi;
