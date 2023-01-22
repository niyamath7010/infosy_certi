

export default function Table(){

    var employees = [
        { empId: 1234, name: "John", designation: "SE" },
        { empId: 4567, name: "Tom", designation: "SSE" },
        { empId: 8910, name: "Kevin", designation: "TA" },
        { empId: 89010, name: "Farhan", designation: "Softwere" },
      ];
      var names = ["Ember", "BackboneJS", "ReactJS", "Jasmine"];

    return(
        <>
            {/* <h1>Emplyees Data</h1>  
            <table>
                <thead>
                    <tr>
                        <th>EmpID</th>
                        <th>EmpName</th>
                        <th>EmpDesig</th>
                    </tr>    
                </thead>
                <tbody>
                    {employees.map((emp)=>{
                        return(
                            <tr key={emp.empId}>
                                <td>{emp.empId}</td>
                                <td>{emp.name}</td>
                                <td>{emp.designation}</td>
                            </tr>
                        )
                    })}    
                </tbody>    
            </table>       */}
            <div>Hello, {names} </div>
            
        </>
    )
}