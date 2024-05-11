import { ContactData } from "../types/contacts.types";
import { MdFavorite } from "react-icons/md";
import { BiSolidEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useState } from "react";
import { FieldValues } from "react-hook-form";

const ContactCard = ({
  contactsData,
  handleDelete,
}: {
  contactsData: ContactData;
  handleDelete: (id: string) => void;
  handleUpdate: (values: FieldValues) => void;
}) => {
  console.log(contactsData);

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<Inputs>();

  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  // const onSubmit = async (data: FieldValues) => {
  //   console.log(data);

  //   const contactInfo = {
  //     name: data.name,
  //     email: data.email,
  //     phoneNumber: data.phoneNumber,
  //     address: data.address,
  //     profilePicture: data.profilePicture,
  //   };

  //   await (contactInfo).unwrap();

  //   toast.success("Contact created successfully!!!");

  //   navigate("/all-contacts");
  // };

  // Edit

  // const defaultValues = {
  //   name: contactsData?.name || "",
  //   email: contactsData?.email || "",
  //   phoneNumber: contactsData?.phoneNumber || "",
  //   address: contactsData?.address || "",
  //   profilePicture: contactsData?.profilePicture || "",
  // };

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

          <div className="tooltip" data-tip="Edit contact">
            <button
              onClick={() =>
                (
                  document.getElementById("my_modal_1") as HTMLDialogElement
                ).showModal()
              }
            >
              <BiSolidEdit size={32} />
            </button>
          </div>

          <dialog
            id="my_modal_1"
            className="fixed z-10 inset-0 overflow-y-auto"
          >
            <div className="flex items-center justify-center min-h-screen">
              <div className="modal-overlay fixed w-full h-full bg-black opacity-50"></div>
              <div className="modal-box bg-white p-8 rounded-md shadow-md">
                <h3 className="font-bold text-lg mb-4">Edit Contact</h3>
                {/* <form
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
            {...register("name", { required: true })}
            className="input-field"
          />
          {errors.name && (
            <span className="text-red-500">Name is required</span>
          )}
        </div>
        <div>
          <label htmlFor="email" className="block">
            Email (optional):
          </label>
          <input
            type="email"
            id="email"
            {...register("email")}
            className="input-field"
          />
        </div>
        <div>
          <label htmlFor="phoneNumber" className="block">
            Phone number:
          </label>
          <input
            type="tel"
            id="phoneNumber"
            {...register("phoneNumber", {
              required: true,
              minLength: {
                value: 11,
                message: "Phone number must be at least 11 characters long",
              },
            })}
            className="input-field"
          />
          {errors.phoneNumber && (
            <span className="text-red-500">{errors.phoneNumber.message}</span>
          )}
        </div>
        <div>
          <label htmlFor="address" className="block">
            Address:
          </label>
          <textarea
            id="address"
            {...register("address", { required: true })}
            className="input-field"
            rows={4}
          />
          {errors.address && (
            <span className="text-red-500">Address is required</span>
          )}
        </div>
        <div>
          <label htmlFor="profilePicture" className="block">
            Profile picture (upload or URL):
          </label>
          <input
            type="text"
            id="profilePicture"
            {...register("profilePicture")}
            className="input-field"
          />
        </div>
        <button
          type="submit"
          className="btn text-white border-none shadow-lg bg-[#FF5C35] hover:bg-[#E04826]"
        >
          Submit
        </button>
      </form> */}
              </div>
            </div>
          </dialog>

          {/* Delete btn */}
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
