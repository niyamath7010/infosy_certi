import { useState } from "react"


export default function ArrayProps(){

    const [employees, setEmployees] = useState([
        { empId: 1234, name: 'John', designation: 'SE' },
        { empId: 4567, name: 'Tom', designation: 'SSE' },
        { empId: 8910, name: 'Kevin', designation: 'TA' }
])

    const NewEmployee=()=>{
        setEmployees([
            ...employees ,
            {
                empId: 7867, name: 'Khader', designation: 'Developer'  
            }
        ])
    }

    return(
        <>
            <Child EmpList={employees} />
            <button onClick={NewEmployee}>Add New Emp</button>
        </>
    )
}

function Child ({EmpList}){
    return(
        <>
            <table>
                <thead>
                    <th>EMPID</th>
                    <th>EMPNAME</th>
                    <th>EMPDESIG</th>
                </thead>
                <tbody>
                    {EmpList.map((Emp)=>{
                        return(
                            <>
                                <tr>
                                    <td>{Emp.empId}</td>
                                    <td>{Emp.name}</td>
                                    <td>{Emp.designation}</td>
                                </tr>
                            </>
                        )
                    })}
                </tbody>
            </table>
            <br/><hr/>
           
        </>
    )
}