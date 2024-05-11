import { useContactsQuery } from "../redux/api/contactsApi";

const AllContacts = () => {
  const { data, isLoading } = useContactsQuery({});

  console.log(data?.data);

  return (
    <div>
      <h1>All Contacts</h1>
      {isLoading && <p>Loading...</p>}
    </div>
  );
};

export default AllContacts;
