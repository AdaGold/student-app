import "./StudentList.css";

const StudentList = () => {
  return (
    <section>
      <h2 className="student-list__heading">Student List</h2>
      <ul className="student-list">
        <li>Student A</li>
        <li>Student B</li>
        <li>Student C</li>
      </ul>
    </section>
  );
};

export default StudentList;
