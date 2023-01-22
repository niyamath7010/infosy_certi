import { Component } from "react";
import {Button} from "react-bootstrap/esm";
import { Alert } from "react-bootstrap/esm";
import { Form } from "react-bootstrap/esm";
import { FormControl } from "react-bootstrap/esm";

export default class BootStrapForm extends Component{
    render(){
        return(
            <>
            {/* <div style={{position:"absolute" , top:"50%" , left:"50%" , transform: translate("-50%", "-50%")}} > */}
                <h1>Login Demo</h1>
                <Form style={{padding:"10px"}}>
                    <h3>Login</h3>
                    <Form.Group>
                        <Form.Control type="text" style={{width:"30%"}}  placeholder="Enter Name" />
                    </Form.Group><br/>
                    <Form.Group>
                        <Form.Control type="password" style={{width:"30%"}}  placeholder="Enter Passcode" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Check type="checkbox" label="remember me" style={{paddingTop:"40px"}} />
                    </Form.Group>
                    <Button variant="danger"  >Login</Button>
                </Form>
                {/* </div> */}
            </>
        )
    }
}