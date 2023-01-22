import { Component } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';


export default class Axioss extends Component{
    constructor(){
        super()
        this.state={
            employees:[ ]
        }
    }

    componentDidMount() {
        this.setState({ isLoading: true });
        axios.get('employees.json')
        .then(result => 
            this.setState({
                employees: result.data,
                isLoading: false
            })
        )
        .catch(error => 
            this.setState({
                error,
                isLoading: false
            })
        );
    }
    render(){

        if(this.state.isLoading) {
            return "Loading..."
        }
        if(this.state.error) {
            return <p>{this.state.error.message}</p>
        }

        return(
            <>
                <h1>Axios</h1>
                <table style={{width:'60%'}} className='table'>
                         <thead className="thead-light">
                             <tr>
                                  <th>EmpID</th>
                                  <th>Name</th>
                                  <th>Designation</th>
                             </tr>
                         </thead>
                         <tbody>
                              {this.state.employees ?
                              this.state.employees.map(employee => {
                                     return (<tr key={employee.empId}>
                                             <td>{employee.empId}</td>
                                             <td>{employee.name}</td>
                                             <td>{employee.designation}</td>
                                     </tr>)
                             }):<tr><td>No Data found</td></tr>
                             }
                         </tbody>
                    </table>
            </>
        )
    }
}