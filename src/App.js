import react from 'react'
import { BrowserRouter as Router, Link, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

import ParticlesBg from 'particles-bg';

import Navbar from "./components/navbar.component";
import Patientlist from "./components/patients-list.components";
import Editlist from "./components/edit-doctors.components";
import CreatePatientList from "./components/create-patients.components";
import CreatePatient from "./components/create-patient.component";


function App()  {
    return (
    <Router>
    <div className="App">
    <Navbar />
    <br/>
    <Route path="/" exact component={Patientlist} />
    <Route path="/edit/:id" component={Editlist} />
    <Route path="/create" component={CreatePatientList} />
    <Route path="/user" component={CreatePatient} />
    </div>
    <ParticlesBg type="cobweb" num={220} bg={true} />
  </Router>
);
}


export default App;
