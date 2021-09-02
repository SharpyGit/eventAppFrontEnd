import axios from "axios";
import React from "react";
import Input from "../../common/Input";

const RegistrationPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5001/user", {
      firstName: e.target.fname.value,
      lastName: e.target.lname.value,
      emailAddress: e.target.email.value,
      password: e.target.password.value,
      isAdmin: false,
    });
  };

  return (
    <>
      <h1>Registration page</h1>
      <form onSubmit={handleSubmit}>
        <label for="fname">First name:</label>
        <input type="text" id="fname" name="fname" />

        <Input labelText="Last name" type="text" id="lastName" />

        <label for="email">Email address:</label>
        <input type="email" id="email" name="eamil" />

        <label for="password">Password:</label>
        <input type="password" id="password" name="password" />

        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default RegistrationPage;
