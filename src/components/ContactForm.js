import { useState } from "react";
import FormField from "../components/FormFields";
import Button from "./Button";

function ContactForm({
  fields = [],
  formStyle = {},
  groupStyle = {},
  buttonStyle = {},
  buttonProps = {},
}) {

  const initialState = {};
  fields.forEach((f) => {
    initialState[f.name] = "";
  });

  const [formData, setFormData] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      {fields.map((field, index) => (
        <div key={index} style={groupStyle}>
          <FormField
            {...field}
            value={formData[field.name]}
            onChange={handleChange}
          />
        </div>
      ))}

      <Button
        title="Submit Now"
        variant="secondaryg"
        style={{ marginTop: "20px", ...buttonStyle }}
        type="submit"
        {...buttonProps}
      />
    </form>
  );
}

export default ContactForm;
