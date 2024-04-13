import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import StudentService from "../Services/StudentService";
import { deleteStudent } from "../Services/StudentService";

function StudentList()
{
    const [data,setData]=useState([]);
    const navigate=useNavigate();

    useEffect(()=>{
      getStudents()
    },[])

    function getStudents()
    {
        StudentService().then((res)=>{
            console.log(res)
            setData(res.data)
            console.log(res.data)
           }).catch(error=>{
            console.error(error)
           })
    }

    function addStudentHandler()
    {
       navigate("/AddStudent")
    }
    
    function updateStudent(id)
    {
       navigate(`/AddStudent/${id}`)
    }
    function deleteStudentById(id)
    {
        console.log(id)
        deleteStudent(id).then(res=>{
            console.log(res.data)
            getStudents()
        }).catch(error=>console.error(error))
       
    }
    return(
        <div className="container">
            
            <h1 className="text-center">List of Student</h1>
            <button className="btn btn-primary mb-2" onClick={addStudentHandler}>Add Student</button>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Student Id</th>
                        <th>Student Name</th>
                        <th>Student Email</th>
                        <th className="text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                       data.map(stu=>
                        <tr key={stu.id}>
                            <td>{stu.id}</td>
                            <td>{stu.name}</td>
                            <td>{stu.email}</td>
                            <td className="text-center">
                                <button className="btn btn-info " onClick={()=>updateStudent(stu.id)}>Update</button>
                                <button className="btn btn-danger " style={{marginLeft:'10px'}} onClick={()=>deleteStudentById(stu.id)}>Delete</button>
                            </td>
                            
                        </tr>
                        )
                    }
                   
                </tbody>
            </table>
        </div>
    )
}

export default StudentList;