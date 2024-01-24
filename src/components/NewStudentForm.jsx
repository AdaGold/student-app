import { useState } from 'react';
import PropTypes from 'prop-types';

const NewStudentForm = (props) => {
  const [formFields, setFormFields] = useState({
    name: '',
    email: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    props.onStudentAdd({
      nameData: formFields.name,
      emailData: formFields.email,
    });

    setFormFields({
      name: '',
      email: '',
    });
  };

  const handleNameChange = (event) => {
    setFormFields({
      ...formFields,
      name: event.target.value,
    });
  };

  const handleEmailChange = (event) => {
    setFormFields({
      ...formFields,
      email: event.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="fullName">Name:</label>
        <input
          id="fullName"
          name="fullName"
          value={formFields.name}
          onChange={handleNameChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          name="email"
          value={formFields.email}
          onChange={handleEmailChange}
        />
      </div>
      <input type="submit" value="Add Student" />
    </form>
  );
};

NewStudentForm.propTypes = {
  onStudentAdd: PropTypes.func.isRequired,
};

export default NewStudentForm;
