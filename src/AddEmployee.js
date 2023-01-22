import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";


export default function AddEmployee(){

    const [employees, setEmployees] = useState([
        { empId: 1234, name: "John", designation: "SE" },
        { empId: 4567, name: "Tom", designation: "SSE" },
        { empId: 8910, name: "Kevin", designation: "TA" },
      ]);

    const addEmp=()=>{
        setEmployees([
            ...employees,
            {
                empId:404 , name:"Khader" ,designation:"Developer"
            }
        ])
    }

    return(
        <>
            <h1>add new empyee</h1>
            <br/>
            <div>
                <thead>
                    <tr>
                        <th>empId</th>
                        <th>empName</th>
                        <th>empDesig</th>
                    </tr>
                </thead>
                <tbody>
                    
                        {employees.map((emp)=>{
                            return (
                                <>
                                <tr>
                                <td>{emp.empId}</td>
                                <td>{emp.name}</td>
                                <td>{emp.designation}</td>
                                </tr>
                                </>
                            )
                        })}
                </tbody>
            </div>
            <br/>
            <button className="btn btn-primary" onClick={addEmp}>Add</button>
        </>
    )
}


