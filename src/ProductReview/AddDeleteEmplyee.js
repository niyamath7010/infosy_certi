import "./AddDelete.css"
import axios from "axios"
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";

export default function AddDeleteEmployee(){

    const [employees , setEmployee]=useState([])

    useEffect(()=>{
        axios.get("https://raw.githubusercontent.com/niyamath7010/trial-api/main/myapi.json").then((res)=>{
            setEmployee(res.data)
        })
    },[])

    const [name,setName]=useState("")
    const [designation , setDesignation]=useState("")
    const [addFlag , setAddflag]=useState(false)
    const [messgae, setMessage]=useState("")
    const [sucess,setSucess]=useState("")

    const deleteEmp=(id)=>{
        
        setSucess("")
    let employeeId = parseInt(id);
    axios
      .delete("https://raw.githubusercontent.com/niyamath7010/trial-api/main/myapi.json" + employeeId)
      .then((res) => {
        axios.get("https://raw.githubusercontent.com/niyamath7010/trial-api/main/myapi.json").then((res) => {
            setEmployee(res.data);
        });
      });
    }

    const addEmployee=(e)=>{
        e.preventDefault()
        setSucess("")
        if(name===""  || designation===""){
            setSucess("Enter Value")
        }else{
            setMessage("")
            setAddflag(false)
            let newEmployee={name:name ,designation :designation }
            axios.post("https://raw.githubusercontent.com/niyamath7010/trial-api/main/myapi.json").then((res)=>{
                setMessage([...employees,res.data])
                setSucess("New Emplyoee data Added")
            })
            setName("")
            setDesignation("")
        }
    }

    return(
        <>  
        <div className="main_container">
             <h1>My Employees Data</h1>
             <div className="main_container2 ">
                <table>
                    <thead>
                        <th>EmpID</th>
                        <th>EmpName</th>
                        <th>Email</th>
                        <th>Age</th>
                    </thead>
                    <tbody>
                       {employees.length>0 ? (
                        employees.map((empp)=>{
                            return(
                                <>
                                    <tr key={empp.EmpID}>
                                    <td>{empp.id}</td>
                                    <td>{empp.name}</td>
                                    <td>{empp.email}</td>
                                    <td>{empp.age}</td>
                                    <td>
                                        <button onClick={deleteEmp}><i className="fa fa-trash"></i></button>
                                    </td>
                                    </tr>
                                </>
                            )
                        })
                       ) : (
                        <>
                            <h1>No Data found</h1>
                        </>
                       )}
                    </tbody>
                </table>
                            <br/>
             <div className="Addbtn">
                <button className="btn btn-primary" onClick={()=>setAddflag(!addFlag)}>
                            Add Employees
                </button>
                            <br/>
                            <br/>
                            <br/>
                        <div className="text-success">{sucess}</div>
                        {addFlag ? (
                            <form >
                                empName:{""}
                                <input type="text" placeholder="enter New person" value={name} 
                                onChange={(e)=>{setName(e.target.value); setMessage("")
                                }}/>
                                <br/>
                                <br/>
                                EmpEmail:{""}
                                <input  type="text" value={designation} onChange={(e)=>{
                                    setDesignation(e.target.value) ; setMessage("")
                                }}/>
                                <br/>
                                <br/>
                                <button onClick={addEmployee}>Add</button>
                            </form>
                        ) : null}
             </div>
             </div>
        </div>
        </>
    )
}