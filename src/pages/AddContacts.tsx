const AddContacts = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const phoneNumber = e.target.phoneNumber.value;
    const address = e.target.address.value;
    const profilePictureURL = e.target.profilePictureURL.value;

    console.log({ name, email, phoneNumber, address, profilePictureURL });
  };

  return (
    <>
      <h1>Add Contacts</h1>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />

        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />

        <label htmlFor="phoneNumber">Phone Number</label>
        <input type="text" name="phoneNumber" id="phoneNumber" />

        <label htmlFor="address">Address</label>
        <input type="text" name="address" id="address" />

        <label htmlFor="profilePictureURL">Profile Picture URL</label>
        <input type="text" name="profilePictureURL" id="profilePictureURL" />

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default AddContacts;
