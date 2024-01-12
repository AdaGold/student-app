import './ClassInfo.css';
import PropTypes from 'prop-types';

const ClassInfo = (props) => {
  return (
    <section>
      <h2 className="class-info__heading">Class Information</h2>
      <ul>
        <li>Name: Team Semicolons</li>
        <li>Number of members: {props.memberCount}</li>
      </ul>
    </section>
  );
};

ClassInfo.propTypes = {
  memberCount: PropTypes.number.isRequired,
};

export default ClassInfo;
