import { ContactData } from "../types/contacts.types";
import { MdFavorite } from "react-icons/md";
import { BiSolidEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useState } from "react";
import { Inputs } from "../pages/AddContacts";
import { FieldValues, useForm } from "react-hook-form";

const ContactCard = ({
  contactsData,
  handleDelete,
}: {
  contactsData: ContactData;
  handleDelete: (id: string) => void;
}) => {
  console.log(contactsData);
  const { register, handleSubmit } = useForm<Inputs>();

  const [isFavorite, setIsFavorite] = useState(false);

  const [editingContactId, setEditingContactId] = useState<string | null>(null);

  const toggleModal = (id: string) => {
    console.log("Editing contact ID:", id); // Check if the ID is correct
    setEditingContactId(id);
    const modal = document.getElementById("my_modal_1") as HTMLDialogElement;
    modal.showModal();
  };

  const onSubmit = async (data: FieldValues) => {
    console.log("Editing contact ID:", editingContactId); // Check if the ID is accessible
    console.log("Form data:", data);
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

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
          <div
            className="tooltip"
            data-tip={isFavorite ? "Remove from favorites" : "Add to favorites"}
          >
            <button onClick={toggleFavorite}>
              <MdFavorite size={32} color={isFavorite ? "red" : "black"} />
            </button>
          </div>

          {/* Edit btn */}
          <div className="tooltip" data-tip="Edit contact">
            <button onClick={() => toggleModal(contactsData._id)}>
              {/* Pass contact ID to toggleModal */}
              <BiSolidEdit size={32} />
            </button>
          </div>

          {/* Delete btn */}
          <div className="tooltip" data-tip="Delete contact">
            <button onClick={() => handleDelete(contactsData._id)}>
              <RiDeleteBin6Line size={32} />
            </button>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4 max-w-md mx-auto p-4 bg-white shadow-md rounded-md"
            >
              <div>
                <label htmlFor="name" className="block">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name")}
                  className="input-field"
                  placeholder="Enter name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email")}
                  className="input-field"
                  placeholder="Enter email"
                />
              </div>
              <div>
                <label htmlFor="phoneNumber" className="block">
                  Phone number:
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  {...register("phoneNumber")}
                  className="input-field"
                  placeholder="Enter phone number"
                />
              </div>
              <div>
                <label htmlFor="address" className="block">
                  Address:
                </label>
                <textarea
                  id="address"
                  {...register("address")}
                  className="input-field"
                  rows={4}
                  placeholder="Enter address"
                />
              </div>
              <div>
                <label htmlFor="profilePicture" className="block">
                  Profile Picture URL:
                </label>
                <input
                  type="text"
                  id="profilePicture"
                  {...register("profilePicture")}
                  className="input-field"
                  placeholder="Paste profile picture URL"
                />
              </div>
              <button
                type="submit"
                className="btn text-white border-none shadow-lg bg-[#7AB2B0] hover:bg-[#586E8D]"
              >
                Add Contact
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ContactCard;
