/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from "sonner";
import ContactCard from "../components/ContactCard";
import LoadingSpinner from "../components/LoadingSpinner";
import {
  useDeleteContactMutation,
  useGetContactsQuery,
  useUpdateContactMutation,
} from "../redux/api/contactsApi";
import { ContactData } from "../types/contacts.types";
import { FieldValues } from "react-hook-form";

const AllContacts = () => {
  const { data: contactsData, isLoading } = useGetContactsQuery({});
  const [deleteContact] = useDeleteContactMutation();
  const [updateContact] = useUpdateContactMutation();

  const handleDelete = async (id: string) => {
    try {
      const res = await deleteContact(id).unwrap();
      if (res) {
        toast.success("Contact deleted successfully!!!");
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const handleUpdate = async (values: FieldValues) => {
    try {
      const res = await updateContact(values).unwrap();
      console.log(res);
      if (res) {
        toast.success("Contact Updated Successfully!!!");
      }
    } catch (err: any) {
      console.error(err);
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
              <ContactCard
                contactsData={contact}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllContacts;
