import { useForm, FieldValues } from "react-hook-form";
import { useCreateContactMutation } from "../redux/api/contactsApi";

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

    alert("Contact created successfully!!!");
  };

  return (
    <>
      <h1>Add Contacts</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="name" className="block">
            Name:
          </label>
          <input
            type="text"
            id="name"
            {...register("name", { required: true })}
            className="border border-gray-300 rounded-md p-2 w-full"
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
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="phoneNumber" className="block">
            Phone number:
          </label>
          <input
            type="tel"
            id="phoneNumber"
            {...register("phoneNumber", { required: true })}
            className="border border-gray-300 rounded-md p-2 w-full"
          />
          {errors.phoneNumber && (
            <span className="text-red-500">Phone number is required</span>
          )}
        </div>
        <div>
          <label htmlFor="address" className="block">
            Address:
          </label>
          <textarea
            id="address"
            {...register("address", { required: true })}
            className="border border-gray-300 rounded-md p-2 w-full"
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
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default AddContacts;
