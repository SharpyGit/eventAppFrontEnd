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
        <Input labelText="First name: " type="text" id="firstName" />
        <Input labelText="Last name: " type="text" id="lastName" />
        <Input labelText="Email address: " type="email" id="email" />
        <Input labelText="Password: " type="password" id="password" />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default RegistrationPage;
