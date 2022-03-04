import React, { useState,useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Enrollvalidation from './Enrollvalidation';
import './Enrollment.css';

function CreateEnrollment(props) {

    // Storing comments
    const [enrollmentValues, setEnrollmentValues] = useState({  first_name: "",last_name: "",gender: "",date_of_birth: "",
    address_line_1: "",address_line_2: "",city: "",district: "",state: "",zip_Code: "",phone: "",email_address: "",password:"",
    confirmpassword:"",highest_qualification: "",
    skill_set: "",current_company_name: "",current_designation: "",ictak_course_handling: "",});

    // Manage Form Error Values
    const [formErrorValues, setFormErrorValues] = useState({});

    const navigation = useNavigate()

    function handleChange(event) {
        const { name, value } = event.target;
        setEnrollmentValues({ ...enrollmentValues, [name]: value })
        
    }
  

    

    async function createEnrollment() {
        const formData = new FormData();
        const fileInput = document.querySelector("#imageInput");

       formData.append("first_name",enrollmentValues.first_name);
       formData.append("last_name", enrollmentValues.last_name);
       formData.append("gender", enrollmentValues.gender);
       formData.append("date_of_birth", enrollmentValues.date_of_birth);
       formData.append("address_line_1", enrollmentValues.address_line_1);
       formData.append("address_line_2", enrollmentValues.address_line_2);
       formData.append("city", enrollmentValues.city);
       formData.append("district", enrollmentValues.district);
       formData.append("state", enrollmentValues.state);
       formData.append("zip_Code", enrollmentValues.zip_Code);
       formData.append("phone", enrollmentValues.phone);
       formData.append("email_address", enrollmentValues.email_address);
       formData.append("password", enrollmentValues.password);
       formData.append("confirmpassword", enrollmentValues.confirmpassword);
       formData.append("highest_qualification", enrollmentValues.highest_qualification);
       formData.append("skill_set", enrollmentValues.skill_set);
       formData.append("current_company_name", enrollmentValues.current_company_name);
       formData.append("current_designation", enrollmentValues.current_designation);
       formData.append("ictak_course_handling", enrollmentValues.ictak_course_handling);
       formData.append("image", fileInput.files[0]);

      //console.log("Calling create enrollment service with body " + formData)
        const response = await fetch(`http://localhost:5001/api/enrollments`, {
            method: 'post',
            body: formData,

        })
        const respBody = await response.json().then (
            navigation("/admin") );
            alert(respBody)
            //console.log(respBody)
    }

    return (

        <>
       <div className="wrapper">
			<div className="inner" >
				<form action="">
					<h3>Enrollment</h3>
					<p>Please fill below details to enroll as a trainer</p>

          <label className="form-group">
						<input type="text" className="form-control"  name="first_name"  value={enrollmentValues.first_name} onChange={handleChange} required/>
						<span>  First name *</span>
            <p className='error'>{formErrorValues.first_name}</p>
						<span className="border"></span>
					</label>

          <label className="form-group">
						<input type="text" className="form-control"  name="last_name"  value={enrollmentValues.last_name} onChange={handleChange} required/>
						<span>  Last name *</span>
            <p className='error'>{formErrorValues.last_name}</p>
						<span className="border"></span>
					</label>

         
         
          <label className="form-group">
          <select name="gender" className="form-control course_selection" value={enrollmentValues.gender} onChange={handleChange} required>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
           
              </select>
            	<span> Gender*</span>
						<span className="border"></span>
					</label>

         
          <label className="form-group">
						<input type="date" className="form-control" value={enrollmentValues.date_of_birth} onChange={handleChange} name="date_of_birth" />
						<span> Date of birth</span>
						<span className="border"></span>
					</label>

          <label className="form-group">
						<input type="text" className="form-control"  value={enrollmentValues.address_line_1} onChange={handleChange} name="address_line_1" />
						<span> Address Line 1</span>
						<span className="border"></span>
					</label>

          <label className="form-group">
						<input type="text" className="form-control"  value={enrollmentValues.address_line_2} onChange={handleChange} name="address_line_2" />
						<span> Address Line 2</span>
						<span className="border"></span>
					</label>

          <label className="form-group">
						<input type="text" className="form-control" value={enrollmentValues.city} onChange={handleChange} name="city"/>
						<span>   City</span>
						<span className="border"></span>
					</label>

          
          <label className="form-group">
						<input type="text" className="form-control" value={enrollmentValues.district} onChange={handleChange} name="district"/>
						<span>   District</span>
						<span className="border"></span>
					</label>
 
          <label className="form-group">
						<input type="text" className="form-control"  value={enrollmentValues.state} onChange={handleChange} name="state" />
						<span>    State</span>
						<span className="border"></span>
					</label>
 
          <label className="form-group">
						<input type="text" className="form-control"value={enrollmentValues.zip_Code} onChange={handleChange} name="zip_Code" />
						<span>     ZIP Code</span>
						<span className="border"></span>
					</label>

          <label className="form-group">
						<input type="phone" className="form-control" value={enrollmentValues.phone} onChange={handleChange} name="phone" required />
						<span>   Phone *</span>
            <p className='error'>{formErrorValues.phone}</p>
						<span className="border"></span>
					</label>

          <label className="form-group">
						<input type="email" name="email_address" className="form-control"  value={enrollmentValues.email_address} onChange={handleChange} required />
						<span>   Email address *</span>
            <p className='error'>{formErrorValues.email_address}</p>
						<span className="border"></span>
					</label>
          <label className="form-group">
						<input type="password" name="password" className="form-control"  value={enrollmentValues.password} onChange={handleChange} required />
						<span>  Password*</span>
            <p className='error'>{formErrorValues.password}</p>
						<span className="border"></span>
					</label>
          <label className="form-group">
						<input type="password" name="confirmpassword" className="form-control"  value={enrollmentValues.confirmpassword} onChange={handleChange} required />
						<span> Confirm Password*</span>
            <p className='error'>{formErrorValues.confirmpassword}</p>
						<span className="border"></span>
					</label>


          <label className="form-group">
						<input type="text" name="highest_qualification" className="form-control" value={enrollmentValues.highest_qualification} onChange={handleChange} required  />
						<span>   Highest Qualification *</span>
						<span className="border"></span>
					</label>

          <label className="form-group">
						<input type="text" name="skill_set" className="form-control" value={enrollmentValues.skill_set} onChange={handleChange} required />
						<span>   Skill set *</span>
						<span className="border"></span>
					</label>


          <label className="form-group">
						<input type="text" name="current_company_name"  className="form-control" value={enrollmentValues.current_company_name} onChange={handleChange} required />
						<span>   Current company Name*</span>
						<span className="border"></span>
					</label>


          <label className="form-group">
						<input type="text" name="current_designation" className="form-control" value={enrollmentValues.current_designation} onChange={handleChange} required />
						<span>    Current Designation *</span>
						<span className="border"></span>
					</label>

          <label className="form-group">
          <select name="ictak_course_handling" className="form-control course_selection" value={enrollmentValues.ictak_course_handling} onChange={handleChange} required>
                <option value="FSD">FSD</option>
                <option value="RPA">RPA</option>
                <option value="DSA">DSA</option>
                <option value="Cybersecurity">Cybersecurity</option>
              </select>
            	<span> ICTAK Course Handling*</span>
              <p className='error'>{formErrorValues.ictak_course_handling}</p>
						<span className="border"></span>
					</label>


         
         
        {/* <fieldset> */}
        <label className="form-group">
        <input type="file"  id="imageInput"  className="form-control" name="image" accept=".jpg,.png" required/>
        
						<span>    Photo *</span>
            
            <p>Possible file types: JPG,PNG. Maximum file size: 10 MB.</p>
            
            <span className="border"></span>
					</label>
        {/* </fieldset> */}
        <div className="btns">
          
          <button className='alink'  onClick={(e)=>{
            e.preventDefault()
            createEnrollment()
            setFormErrorValues(Enrollvalidation(enrollmentValues));
            }} 
            value="Submit application" > Submit </button>
        </div>
				</form>
			</div>
		</div>
        </>
    );
}

export default CreateEnrollment;