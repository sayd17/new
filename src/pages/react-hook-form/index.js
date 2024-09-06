import React from "react";
import userSchema from "@/Validations/UserValidation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
function index() {
  const createUser = async (event) => {
    event.preventDefault();
    let formData = {
      name: event.target[0].value,
      email: event.target[1].value,
      password: event.target[2].value,
    };
    const isValid = await userSchema.isValid(formData);
    // console.log(isValid);
  };

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    // defaultValues: {
    //   email: "test@email.com",
    //   name: "Abu Sayeed",
    //   password: "********",
    // },
    resolver: yupResolver(userSchema),
  });

  const submitData = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      throw new Error("this email is already taken");
      console.log(data);
    } catch (error) {
      setError("root", {
        message: error.message,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(submitData)}>
      <input {...register("name")} type="text" placeholder="Name..." />
      {errors.name && <div className="text-red-500">{errors.name.message}</div>}

      <input
        {...register("email", {
          // required: "email is required",
          // validate: (value) => {
          //   if (!value.includes("@")) {
          //     return "Email must include @";
          //   }
          //   return true;
          // },+/* -````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````` */
        })}
        type="text"
        // placeholder="email@email.com"
      />
      {errors.email && (
        <div className="text-red-500">{errors.email.message}</div>
      )}

      <input
        {...register("password", {
          // required: "password is required",
          // minLength: {
          //   value: 8,
          //   message: "Password must have at least 8 characters",
          // },
        })}
        type="password"
        placeholder="password123"
      />
      {errors.password && (
        <div className="text-red-500">{errors.password.message}</div>
      )}
      <button type="submit">{isSubmitting ? "Loading..." : "Submit"}</button>
      {errors.root && <div className="text-red-500">{errors.root.message}</div>}
    </form>
  );
}

export default index;
