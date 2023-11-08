import StudentList from "./components/StudentList";
import ClassInfo from "./components/ClassInfo";

function App() {
  const studentData = [
    {
      nameData: "Ada",
      emailData: "ada@dev.org",
    },
    {
      nameData: "Soo-ah",
      emailData: "sooah@dev.org",
    },
    {
      nameData: "Chrissy",
      emailData: "chrissy@dev.org",
    },
  ];

  return (
    <main>
      <h1>Attendance</h1>
      <ClassInfo memberCount={studentData.length}></ClassInfo>
      <StudentList students={studentData}></StudentList>
    </main>
  );
}

export default App;