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
    <div className="min-h-screen">
      {contactsData?.data?.length === 0 && (
        <h1 className="text-center mt-8 text-xl">
          There are no contacts. Please add contacts
        </h1>
      )}
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="flex flex-wrap justify-center">
          {contactsData?.data?.map((contact: ContactData) => (
            <div key={contact._id} className="mx-4 my-4 px-4 py-4">
              <ContactCard contactsData={contact} handleDelete={handleDelete} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllContacts;
