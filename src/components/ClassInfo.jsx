import './ClassInfo.css';

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

export default ClassInfo;
