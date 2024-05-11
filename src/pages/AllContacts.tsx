/* eslint-disable @typescript-eslint/no-explicit-any */
import ContactCard from "../components/ContactCard";
import LoadingSpinner from "../components/LoadingSpinner";
import {
  useDeleteContactMutation,
  useGetContactsQuery,
} from "../redux/api/contactsApi";
import { ContactData } from "../types/contacts.types";

const AllContacts = () => {
  const { data: contactsData, isLoading } = useGetContactsQuery({});
  const [deleteContact] = useDeleteContactMutation();

  const handleDelete = async (id: string) => {
    try {
      const res = await deleteContact(id).unwrap();
      if (res?.id) {
        alert("Contact deleted successfully!!!");
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  console.log(contactsData?.data);

  return (
    <div>
      {contactsData?.data?.length === 0 && (
        <h1>There are no contacts. Please add contacts</h1>
      )}
      <h1>All Contacts</h1>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        contactsData?.data?.map((contact: ContactData) => (
          <div>
            <ContactCard
              key={contact._id}
              contactsData={contact}
              handleDelete={handleDelete}
            />
          </div>
        ))
      )}
    </div>
  );
};

export default AllContacts;
