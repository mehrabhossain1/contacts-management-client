import { useForm, FieldValues } from "react-hook-form";
import { useCreateContactMutation } from "../redux/api/contactsApi";
import "./AddContacts.css";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

type Inputs = {
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
  profilePicture: string;
};

const AddContacts = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  //   const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const [createContact] = useCreateContactMutation();

  const navigate = useNavigate();

  const onSubmit = async (data: FieldValues) => {
    console.log(data);

    const contactInfo = {
      name: data.name,
      email: data.email,
      phoneNumber: data.phoneNumber,
      address: data.address,
      profilePicture: data.profilePicture,
    };

    await createContact(contactInfo).unwrap();

    toast.success("Contact created successfully!!!");

    navigate("/all-contacts");
  };

  return (
    <>
      <h1>Add Contacts</h1>
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
      </form>
    </>
  );
};

export default AddContacts;
