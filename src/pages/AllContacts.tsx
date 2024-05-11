import ContactCard from "../components/ContactCard";
import LoadingSpinner from "../components/LoadingSpinner";
import { useContactsQuery } from "../redux/api/contactsApi";
import { ContactData } from "../types/contacts.types";

const AllContacts = () => {
  const { data: contactsData, isLoading } = useContactsQuery({});

  console.log(contactsData?.data);

  return (
    <div>
      <h1>All Contacts</h1>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        contactsData?.data?.map((contact: ContactData) => (
          <div>
            <ContactCard key={contact._id} contactsData={contact} />
          </div>
        ))
      )}
    </div>
  );
};

export default AllContacts;
