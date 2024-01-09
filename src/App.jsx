import { useState } from 'react';
import StudentList from './components/StudentList';
import ClassInfo from './components/ClassInfo';
import NewStudentForm from './components/NewStudentForm';

function App() {
  const [studentData, setStudentData] = useState([
    {
      id: 1,
      nameData: 'Ada',
      emailData: 'ada@dev.org',
      isPresentData: false,
    },
    {
      id: 2,
      nameData: 'Soo-ah',
      emailData: 'sooah@dev.org',
      isPresentData: false,
    },
    {
      id: 3,
      nameData: 'Chrissy',
      emailData: 'chrissy@dev.org',
      isPresentData: true,
    },
  ]);

  const addStudentData = (newStudent) => {
    // Duplicate the student list
    const newStudentList = [...studentData];

    // Logic to generate the next valid student ID
    const nextId = Math.max(...newStudentList.map((student) => student.id)) + 1;

    newStudentList.push({
      id: nextId,
      nameData: newStudent.nameData,
      emailData: newStudent.emailData,
      isPresentData: false,
    });

    setStudentData(newStudentList);
  };

  const toggleStudentPresence = (studentId) => {
    // calculate the updated student data by finding the student that matches
    // the passed id, making a copy with object spreading, then overwriting
    // the presence value with its inverse
    const students = studentData.map(student => {
      if (student.id === studentId) {
        // this was the toggled student, so make a new record with the updated
        // presence value
        return { ...student, isPresentData: !student.isPresentData };
      } else {
        // this was not the student who was toggled, so we can use the existing
        // data in the new student array
        return student;
      }
    });

    // uses value-passing style to update the student data, but could be
    // refactored to use function-passing style
    setStudentData(students);
  };

  return (
    <main>
      <h1>Attendance</h1>
      <ClassInfo memberCount={studentData.length}></ClassInfo>
      <StudentList
        students={studentData}
        onPresenceToggled={toggleStudentPresence}
      ></StudentList>
      <NewStudentForm addStudentCallback={addStudentData}></NewStudentForm>
    </main>
  );
}

export default App;
