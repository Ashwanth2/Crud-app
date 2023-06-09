import React, { useState } from "react";
import {Button,Form} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import Students from "./Students";
import {v4 as uuid}from "uuid";
import{Link,useNavigate} from 'react-router-dom'


function Plus(){
    const[name, setName]=useState("");
    const[age,setAge]= useState("");
    const[email,setEmail] = useState("");

    let history = useNavigate();


    const handleSubmit = (e) =>{

        e.preventDefault();

        const id= uuid();
        let uniqueId = id.slice(0,9);

        let a = name,
        b = age,
        c = email;

       Students.push({id: uniqueId, Name : a ,Age: b , email: c})

        history("/");
    }

    return <div>
        <Form className="d-grid gap-2" style={{margin:"15rem"}}>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Control type="text" placeholder="Enter Name" required onChange={(e) => setName(e.target.value)}>
                </Form.Control>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formAge">
                <Form.Control type="text" placeholder="Enter Age" required onChange={(e) => setAge(e.target.value)}>
                </Form.Control>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formemail">
                <Form.Control type="text" placeholder="Enter email" required onChange={(e) => setEmail(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Button onclick={(e) => handleSubmit(e)}type="submit">Submit</Button>
        </Form>
    </div>
}
export default Plus;