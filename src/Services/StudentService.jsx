import axios from "axios";


function StudentService()
{
    return(
        axios.get("http://localhost:8080/users")
    )
}
export default StudentService;

export const createStudent=(stu)=>axios.post("http://localhost:8080/create",stu)

// function createStudent(stu)
// {
//     return(
//         axios.post("http://localhost:8080/create",stu)
//     )
// }

// export {createStudent};

export const getStudent=(stuId)=>axios.get(`http://localhost:8080/users/${stuId}`)
//export const getStudent=(stuId)=>axios.get("http://localhost:8080/users" +"/"+stuId)

export const updateStudent=(stuId,stu)=>axios.put(`http://localhost:8080/update/${stuId}`,stu)

export const deleteStudent=(stuId)=>axios.delete(`http://localhost:8080/delete/${stuId}`)

