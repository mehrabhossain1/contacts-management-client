import { ContactData } from "../types/contacts.types";
import { MdFavorite } from "react-icons/md";
import { BiSolidEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";

const ContactCard = ({
  contactsData,
  handleDelete,
}: {
  contactsData: ContactData;
  handleDelete: (id: string) => void;
}) => {
  console.log(contactsData);

  return (
    <div className="flex flex-col lg:flex-row lg:items-center bg-white shadow-md rounded-md p-4 lg:p-4">
      <figure className="lg:mr-4">
        <img
          className="rounded-full w-24 h-24 lg:w-32 lg:h-32"
          src={contactsData?.profilePicture}
          alt="Profile Picture"
        />
      </figure>
      <div className="flex flex-col lg:flex-row lg:flex-grow">
        <div className="lg:ml-4">
          <h2 className="text-lg font-semibold mb-2">
            Name: {contactsData?.name}
          </h2>
          <p className="mb-2">Email: {contactsData?.email}</p>
          <p className="mb-2">Phone Number: {contactsData?.phoneNumber}</p>
          <p className="mb-2">Address: {contactsData?.address}</p>
        </div>
        <div className="justify-end mt-4 lg:mt-0 w-full lg:w-auto">
          <div className="tooltip" data-tip="Add to favorite">
            <button>
              <MdFavorite size={32} />
            </button>
          </div>

          <div className="tooltip" data-tip="Edit contact">
            <button>
              <BiSolidEdit size={32} />
            </button>
          </div>

          <div className="tooltip" data-tip="Delete contact">
            <button onClick={() => handleDelete(contactsData._id)}>
              <RiDeleteBin6Line size={32} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
