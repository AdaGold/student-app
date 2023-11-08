import Student from "./Student";
import "./StudentList.css";

const StudentList = (props) => {
  const studentComponents = props.students.map((student, index) => {
    return (
      <li key={index}>
        <Student name={student.nameData} email={student.emailData}></Student>
      </li>
    );
  });

  return (
    <section>
      <h2>Student List</h2>
      <ul>{studentComponents}</ul>
    </section>
  );
};

export default StudentList;
