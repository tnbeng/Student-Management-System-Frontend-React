import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

import { createStudent, getStudent, updateStudent } from "../Services/StudentService";

function AddStudent()
{
    const {id}=useParams();
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');

    const[erros,setErros]=useState({
        name:'',
        email:''
    })

    const navigate=useNavigate();

    useEffect(()=>{
        getStudent(id).then((res)=>{
        setName(res.data.name);
        setEmail(res.data.email);
       }).catch(error=>{
          console.error(error);
       })
    },[id])

    // function handleName(event)
    // {
    //    setName(event.target.value)
    // }

    function handleEmail(event)
    {
       setEmail(event.target.value)
    }

    function createOrUpdateStudent(e)
    {   
        e.preventDefault();
        if(validation())
        {
            const student={name,email}
          
            if(id)
            {
                updateStudent(id,student).then((res)=>{
                    console.log(res.data)
                    navigate("/")
                }).catch(error=>console.error(error))
            }else{
                createStudent(student).then((res)=>{
                    console.log(res.data)
                    navigate("/")
                }).catch(error=>console.error(error))
            }
            
        }
    }

    function validation()
    {
        let valid=true;
        const errorCopy={... erros}

        if(name.trim())
        {
            errorCopy.name='';
        }else{
            errorCopy.name="Name is required";
            valid=false;
        }

        if(email.trim())
        {
            errorCopy.email='';
        }else{
            errorCopy.email="Email is required";
            valid=false;
        }

        setErros(errorCopy);

        return valid;
    }

    function pageTitle()
    {
         if(id)
         {
            return  <h2 className="text-center">Update Student</h2>
         }else{
            return  <h2 className="text-center">Tnb</h2>
         }
    }

    return(
        <div className="container">
          
            <br /><br />
          <div className="row">
             <div className="card col-md-6 offset-md-3 offset-md-3" >
               {pageTitle()}
               <div className="card-body">
                  <form action="">
                    <div className="form-group mb-2">
                        <label className="form-label">Student Name</label>
                        <input type="text"
                         placeholder="Enter Student Name"
                         name="name" value={name} 
                         className={`form-control ${erros.name ? 'is-invalid':''}`}
                         onChange={(e)=>setName(e.target.value)}
                         />
                        {erros.name && <div className="invalid-feedback">{erros.name}</div>}
                    </div>
                    <div className="form-group mb-2">
                        <label className="form-label">Student Email</label>
                        <input type="text"
                         placeholder="Enter Student Email"
                         name="email" value={email} 
                         className={`form-control ${erros.email ? 'is-invalid' : ''}`}
                         onChange={handleEmail}
                         />
                         {erros.email && <div className="invalid-feedback">{erros.email}</div>}
                    </div>
                    <button className="btn btn-success" onClick={createOrUpdateStudent}>Submit</button>
                  </form>
               </div>
             </div>
          </div>
        </div>
    )
}

export default AddStudent;