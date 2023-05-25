import React, { Fragment } from 'react';
import {Button, Table} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css"
import Students from './Students';
import{Link,useNavigate} from 'react-router-dom'

function Home(){

    let history = useNavigate();
    const handleEdit = (id, name, age, Email)=>{
        localStorage.setItem('Name',name);
        localStorage.setItem('Age',age);
     
        localStorage.setItem('Id',id);
    }

    const handleDelete = (id) =>{
        var index = Students.map(function(e){
            return e.id
        }).indexOf(id);
        Students.splice(index,1);
        history("/")
    }
    return(
        <Fragment>
        <div style = {{margin:"10rem"}}>
            <Table striped bordered hover sizes="sm">
                <thead>
                    <tr>
                        <th>
                            Name
                        </th>
                        <th>
                            Age
                        </th>
                        <th>
                            Email
                        </th>
                        <th>
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Students && Students.length > 0
                        ?
                        Students.map((item)=>{
                            return(
                                <tr>
                                    <td>
                                        {item.Name}
                                    </td>
                                    <td>
                                        {item.Age}
                                    </td>
                                    <td>
                                        {item.Email}
                                    </td>
                                    <td>
                                        <Link to={`/edit`}>
                                        <Button onClick={() => handleEdit(item.id, item.Name, item.Age, item.Email)}>EDIT</Button>
                                        </Link>
                                        &nbsp;
                                        <Button onClick={() => handleDelete(item.id)}>DELETE</Button>
                                    </td>
                                </tr>
                            )
                        })
                        :
                        "No data available"
                    }
                </tbody>
            </Table>
            <br>
            </br>
            <Link className='d-grid gap-2' to="/create">
                <Button size ="lg">create</Button>
            </Link>
        </div>
        </Fragment>
    )
}



export default Home;