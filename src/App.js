import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css"
import { BrowserRouter,Routes,Route } from "react-router-dom";

import StudentList from "./Conponents/StudentList";
import Header from "./Conponents/Header";
import Footer from "./Conponents/Footer";
import AddStudent from "./Conponents/AddStudent";




function App()
{
    return (
      <div>
        <BrowserRouter>
         <Header/>
          
          <Routes>

            <Route path="/" element={ <StudentList/>}/>
            <Route path="/students" element={ <StudentList/>}/>
            <Route path="/addStudent" element={ <AddStudent/>}/>
            <Route path="/addStudent/:id" element={ <AddStudent/>}/>
            <Route path="/addStudent/:id/:mer" element={ <AddStudent/>}/>

          </Routes>

         <Footer/>
        </BrowserRouter>
      </div>
    )
}

export default App;