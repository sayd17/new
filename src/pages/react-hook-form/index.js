import React from "react";
import userSchema from "@/Validations/UserValidation";

function index() {
  const createUser = async (event) => {
    event.preventDefault();
    let formData = {
      name: event.target[0].value,
      email: event.target[1].value,
      password: event.target[2].value,
    };
    const isValid = await userSchema.isValid(formData);
    console.log(isValid);
  };

  return (
    <form onSubmit={createUser}>
      <input type="text" placeholder="Name..." />

      <input type="text" placeholder="email@email.com" />

      <input type="password" placeholder="password123" />
      <input type="submit" value="submit" />
    </form>
  );
}

export default index;
