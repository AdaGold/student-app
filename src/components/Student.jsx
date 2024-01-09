import './Student.css';
import PropTypes from 'prop-types';

const Student = (props) => {
  const onAttendanceButtonClick = () => {
    // Invoke the function passed in through the prop named "onPresenceToggle"
    // This function is referenced by the name "toggleStudentPresence" in App
    props.onPresenceToggle(props.id);
  };

  const nameColor = props.isPresent ? 'green' : 'red';

  return (
    <div>
      <ul>
        <li className={nameColor}>Nickname: {props.name}</li>
        <li>Email: {props.email}</li>
      </ul>
      <button onClick={onAttendanceButtonClick}>
        Toggle if {props.name} is present
      </button>
    </div>
  );
};

Student.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  isPresent: PropTypes.bool.isRequired,
  onPresenceToggle: PropTypes.func.isRequired,
};

export default Student;
