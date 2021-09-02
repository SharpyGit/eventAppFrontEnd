import React from "react";

const Input = ({ id, labelText, type }) => (
  <>
    <label for={id}>{labelText}</label>
    <input type={type} id={id} name={id} />
  </>
);

export default Input;
