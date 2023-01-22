import { useState } from "react"
import AddEmp from "./Child"

export default function App(){
  const [employees, setEmployees] = useState([
    { empId: 1234, name: 'John', designation: 'SE' },
    { empId: 4567, name: 'Tom', designation: 'SSE' },
    { empId: 8910, name: 'Kevin', designation: 'TA' }
])

const addEmp=(newEmp)=>{
  setEmployees([...employees , newEmp])
}
  return(
    <>
    <h1>My employees</h1>

    <table>
      <thead>
        <th>EmpId</th>
        <th>Name</th>
        <th>Desig</th>
      </thead>
      <tbody>
        {
          employees.map((MyEmp)=>{
            return (
              <>
                  <tr>
                    <td>{MyEmp.empId}</td>
                    <td>{MyEmp.name}</td>
                    <td>{MyEmp.designation}</td>
                  </tr>
              </>
            )
          })
        }
        </tbody>
    </table>
    <br/><br/>
          <AddEmp addEmp={addEmp} />
    </>
  )
}