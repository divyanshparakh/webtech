import React ,{ Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Doctor = props => (
   <tr className="bg-dark">
     <td>{props.doctor.username}</td>
     <td>{props.doctor.description}</td>
     <td>{props.doctor.date.substring(0,10)}</td>
     <td>{props.doctor.onduty}</td>
     <td>{props.doctor.patient_treated}</td>
     <td>{props.doctor.offduty}</td>
     <td>
       <Link to={"/edit/"+props.doctor._id}>edit</Link>
     </td>
   </tr>
 )

 export default class DoctorsList extends Component {
   constructor(props) {
     super(props);

     this.deleteDoctor = this.deleteDoctor.bind(this)

     this.state = {doctors: []};
   }

   componentDidMount() {
     axios.get('http://localhost:4000/Doctor/')
       .then(response => {
         this.setState({ doctors: response.data })
       })
       .catch((error) => {
         console.log(error);
       })
   }

   deleteDoctor(id) {
     axios.delete('http://localhost:4000/Doctor/'+id)
       .then(response => { console.log(response.data)});

     this.setState({
       doctors: this.state.doctors.filter(el => el._id !== id)
     })
   }

   patientList() {
     return this.state.doctors.map(currentdoctor => {
       return <Doctor doctor={currentdoctor} deleteDoctor={this.deleteDoctor} key={currentdoctor._id}/>;
     })
   };

   render() {

   var fontSty = {
     color: "black",
     fontWeight: 900,
   };

     return (
       <div>
         <h3 style={fontSty} className="breadcrumb bg-light fontSty">Records </h3>
         <table className="table jumbotron">
           <thead className="thead-light">
             <tr  className="bg-light">
               <th>Patient Name</th>
               <th>Issue</th>
               <th>Date</th>
               <th>Time // onduty hrs ko time</th>
               <th>Number//Patient Treated</th>
               <th>Charge // offduty ki</th>
               <th>Actions</th>
             </tr>
           </thead>
           <tbody>
             { this.patientList() }
           </tbody>
         </table>
       </div>
     )
   }
 }
