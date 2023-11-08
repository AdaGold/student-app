import { useState } from "react";
import PropTypes from "prop-types";

const NewStudentForm = (props) => {
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
  });

  const onFormSubmit = (event) => {
    event.preventDefault();

    props.addStudentCallback({
      nameData: formFields.name,
      emailData: formFields.email,
    });

    setFormFields({
      name: "",
      email: "",
    });
  };

  const onNameChange = (event) => {
    setFormFields({
      ...formFields,
      name: event.target.value,
    });
  };

  const onEmailChange = (event) => {
    setFormFields({
      ...formFields,
      email: event.target.value,
    });
  };

  return (
    <form onSubmit={onFormSubmit}>
      <div>
        <label htmlFor="fullName">Name:</label>
        <input
          name="fullName"
          value={formFields.name}
          onChange={onNameChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input name="email" value={formFields.email} onChange={onEmailChange} />
      </div>
      <input type="submit" value="Add Student" />
    </form>
  );
};

NewStudentForm.propTypes = {
  addStudentCallback: PropTypes.func.isRequired,
};

export default NewStudentForm;
