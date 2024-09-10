import React from "react";
import { forwardRef, useState } from "react";
import MyInput from "./MyInput";

const FormField = forwardRef(({ label, isRequired }, ref) => {
  const [value, setValue] = useState("");

  return (
    <>
      <MyInput
        label={label}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        ref={ref}
      />
      {isRequired && value === "" && <i>Required</i>}
    </>
  );
});

export default FormField;
