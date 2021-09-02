import React from "react";

const Input = (props) => (
  <>
    <label for={props.id}>{props.labelText}</label>
    <input type={props.type} id={props.id} name={props.id} />
  </>
);

export default Input;
