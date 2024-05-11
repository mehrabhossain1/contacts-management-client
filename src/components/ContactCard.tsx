import { ContactData } from "../types/contacts.types";

const ContactCard = ({
  contactsData,
  handleDelete,
}: {
  contactsData: ContactData;
}) => {
  console.log(contactsData);

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img
          className="rounded-full w-24 h-24"
          src={contactsData?.profilePicture}
          alt="Profile Picture"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Name: {contactsData?.name}</h2>
        <p>Email: {contactsData?.email}</p>
        <p>Phone Number: {contactsData?.phoneNumber}</p>
        <p>Address: {contactsData?.address}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Edit</button>
          <button
            onClick={() => handleDelete(contactsData._id)}
            className="btn btn-primary"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
