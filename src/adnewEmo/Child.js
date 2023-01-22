import { useState } from "react";

export default function AddEmp({ addEmp }) {
  const [empId, setEmpId] = useState("");
  const [name, setName] = useState("");
  const [designation, setdesignation] = useState("");

  const AddEmployee = (e) => {
    e.preventDefault();
    const newEmployee = { empId: empId, name: name, designation: designation };
    addEmp(newEmployee);
    setEmpId("");
    setName("");
    setdesignation("");
  };
  return (
    <>
      <form onSubmit={AddEmployee}>
        EmpID:
        <input
          type="text"
          value={empId}
          onChange={(e) => setEmpId(e.target.value)}
        />
        <br />
        EmpName:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        Desig:
        <input
          type="text"
          value={designation}
          onChange={(e) => setdesignation(e.target.value)}
        />
        <br />
        <input type="submit" value={AddEmployee} />
      </form>
    </>
  );
}
