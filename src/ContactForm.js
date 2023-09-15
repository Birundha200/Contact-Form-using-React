import {useState} from 'react';
import './ContactForm.css'; 

export default function ContactForm(){
    const [fname,setFname]=useState('');
    const [lname,setLname]=useState('');
    const [relationship,setRealationShip]=useState('');
    const [phoneNumber,setPhoneNumber]=useState();
    const [email,setEmail]=useState('');
    const [address,setAddress]=useState('');
    const [cityZipCode,setCityZipCode]=useState('');
    const [secondPhoneNumber,setSecondPhoneNumber]=useState('');
    const [jobtitle,setJobTitle]=useState('');
    const [department,setDepartment]=useState('');
    const [showGroupTextArea,setShowGroupTextArea]=useState(false);
    const [errorPopup, setErrorPopup] = useState(false);
    const [showPopup,setShowPopup]=useState(false);
    const [error,setErrors]=useState('');
    const handleFnameChange=(e)=>{
      const value=e.target.value;
      setFname(value.replace(/\s+/g, ''));
      setErrors('');
      
    }
    //localStorage
    const handle=()=>{
      localStorage.setItem("Firstname",fname)
      localStorage.setItem("Lastname",lname)
      localStorage.setItem("Relationship",relationship)
      localStorage.setItem("Phonenumber",phoneNumber)
      localStorage.setItem("Email",email)
      localStorage.setItem("Address",address)
      localStorage.setItem("CityStateZipCode",cityZipCode)
      localStorage.setItem("SecondPhonenumber",secondPhoneNumber)
      localStorage.setItem("Job Title",jobtitle)
      localStorage.setItem("Department",department)
    }
    const handleRemove=()=>{
      localStorage.removeItem("Firstname",fname)
      localStorage.removeItem("Lastname",lname)
      localStorage.removeItem("Relationship",relationship)
      localStorage.removeItem("Phonenumber",phoneNumber)
      localStorage.removeItem("Email",email)
      localStorage.removeItem("Address",address)
      localStorage.removeItem("CityStateZipCode",cityZipCode)
      localStorage.removeItem("SecondPhonenumber",secondPhoneNumber)
      localStorage.removeItem("Job Title",jobtitle)
      localStorage.removeItem("Department",department)
    }
    //validation for firstname
    const validateFname=()=>{
      let errorStatus = false;
      const regex=/^[a-zA-Z]*$/;
      if(!fname.trim()){
        setErrors("Firstname is required");
        errorStatus= true;
      }else if(!regex.test(fname)){
        setErrors('Firstname-Only alphabets are allowed');
        errorStatus= true;
      }else{
        setErrors('');
        errorStatus=false;
      }
      return errorStatus
    }
   const handleLnameChange=(e)=>{
    const value=e.target.value;
    setLname(value);
    setLname(value.replace(/\s+/g, ''));
    setErrors('');

   }
  //  validation for lastname
    const validateLname=()=>{
      let errorStatus = false;
      const regex=/^[a-zA-Z]*$/;
      if(!lname.trim()){
        setErrors("Lastname is required");
        errorStatus= true;
      }else if(!regex.test(lname)){
        setErrors('Lastname-Only alphabets are allowed');
        errorStatus= true;
      }else{
        setErrors('');
        errorStatus= false;
      }
      return errorStatus
    }
    const handleRelationShipChange=(e)=>{
      const value=e.target.value;
      setRealationShip(value);
    }
    const handlePhoneNumberChange=(e)=>{
      const value=e.target.value;
      setPhoneNumber(value.replace(/\s+/g, ''));
      setErrors('');
    }
    //validation for phone number
    const validatePhoneNumber = () => {
      let errorStatus=false;
      const regex = /^[0-9]{7,10}$/; 
      if(!phoneNumber){
        setErrors('phone number is required')
        errorStatus= true;
      }else if(!regex.test(phoneNumber)){
        setErrors("Phonenumber should be 7-10 digits")
        errorStatus= true;
      }else{
        setErrors('');
        errorStatus= false;
      }
      return errorStatus;
    };
    const handleEmailChange=(e)=>{
      const value=e.target.value;
      setEmail(value.replace(/\s+/g, ''));
      setErrors('');
    }
    //validation for email
    const validateEmail=()=>{
       let errorStatus= false;
      const regex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if(!email){
        setErrors("Email is required")
        errorStatus= true;
      }else if(!regex.test(email)){
        setErrors("Enter valid email address");
        errorStatus= true;
      } else if(email.length>30){
        setErrors("Email length should be less than 30");
        errorStatus= true;
      }else {
        setErrors("");
        errorStatus= false;
      }
      return errorStatus;
    }
    const handleAddressChange=(e)=>{
      const value=e.target.value;
      setAddress(value);
      setErrors('');
    }
    //validation for address
    const validateAddress=()=>{
      let errorStatus=false;
      if(address.length>=150){
        setErrors("Address length should be less than 150 or 150 characters")
        errorStatus= true;
      } else {
        setErrors("");
        errorStatus= false;
      }
       return errorStatus
    }
    const handleCityZipCodeChange=(e)=>{
      const value=e.target.value;
      setCityZipCode(value);
      setErrors('');
    }
    //validation for CityZipCode
    const validateCityZipCode=()=>{
      let errorStatus=false;
      const zipRegex=/^\d{6}$/;
      if(!cityZipCode){
        setErrors('');
        errorStatus=false;
      }
       else 
      if(!zipRegex.test(cityZipCode)){
        setErrors("CityZipCode should be 6 digits")
        errorStatus= true;
      } else {
        setErrors('');
        errorStatus=false;
      }
      return errorStatus;
    }
    const handleSecondPhoneNumberChange=(e)=>{
      const value=e.target.value;
      setSecondPhoneNumber(value);
      setErrors('');
    }
    //validatin for secondphonenumber
    const validateSecondPhoneNumber=()=>{
      let errorStatus=false;
     let regex = /^[0-9]{7,10}$/; 
      if(!secondPhoneNumber){
        setErrors('');
        errorStatus=false;
      }
      else if(!regex.test(secondPhoneNumber)){
        setErrors("Second Phonenumber should be 7-10 digits")
        errorStatus=true;
      }else{
        setErrors('');
        errorStatus=false;
      }
      return errorStatus;
    }
    const handleJobTitleChange=(e)=>{
      const value=e.target.value;
      setJobTitle(value);
      setErrors('');
    }
    //validation for jobtitle
    const validateJobTitle=()=>{
      let errorStatus=false;
      const regex=/^[a-zA-Z]*$/;
      if(!jobtitle){
        setErrors('');
        errorStatus=false;
      }
       else if(!regex.test(jobtitle)){
        setErrors('JobTitle-Only alphabets are allowed');
        errorStatus=true;
      }else{
        setErrors('');
        errorStatus=false;
      }
      return errorStatus;
    }
    const handleDepartmentChange=(e)=>{
      const value=e.target.value;
      setDepartment(value);
      setErrors('');
    }
    //validation for department
    const validateDepartment=()=>{
      let errorStatus=false;
      const regex=/^[a-zA-Z]*$/;
      if(!department){
        setErrors('');
        errorStatus=false;
      }
       else if(!regex.test(department)){
        setErrors('Department-Only alphabets are allowed');
        errorStatus=true;
      }else{
        setErrors('');
        errorStatus=false;
      }
      return errorStatus;
    }
    const handleAddTogroup=()=>{
      setShowGroupTextArea(true);
    } 
    const handleCancel=()=>{
        setFname('');
        setLname('');
        setRealationShip('');
        setPhoneNumber('');
        setEmail('');
        setAddress('');
        setCityZipCode('');
        setSecondPhoneNumber('');
        setJobTitle('');
        setDepartment('');
        handleRemove();
    } 
    const closePopup=()=>{
        setShowPopup(false);
    }
    const closeePopup=()=>{
        setShowPopup(false);
        setFname('');
        setLname('');
        setRealationShip('');
        setPhoneNumber('');
        setEmail('');
        setAddress('');
        setCityZipCode('');
        setSecondPhoneNumber('');
        setJobTitle('');
        setDepartment('');
    } 
    const handleSubmit=(event)=>{
        event.preventDefault();
       
        if (validateFname()) {
          setErrorPopup(true)
          setShowPopup(true);
          return;
        } 
        if ( validateLname()) {
          setErrorPopup(true)
          setShowPopup(true);
          return;
        } 
        if (validatePhoneNumber()) {
          setErrorPopup(true)
          setShowPopup(true);
          return;
        } 
        if (validateEmail()) {
          setErrorPopup(true)
          setShowPopup(true);
          return;
        } 
        if (validateAddress()) {
          setErrorPopup(true)
          setShowPopup(true);
          return;
        } 
        if (validateCityZipCode()) {
          setErrorPopup(true)
          setShowPopup(true);
          return;
        } 
        if (validateSecondPhoneNumber()) {
          setErrorPopup(true)
          setShowPopup(true);
          return;
        } 
        if (validateJobTitle()) {
          setErrorPopup(true)
          setShowPopup(true);
          return;
        } 
        if (validateDepartment()) {
          setErrorPopup(true)
          setShowPopup(true);
          return;
        } 
       if(!error){
        setErrorPopup(false);
        setShowPopup(true);
        return;
       }   
       handle();
    }
    setTimeout(()=>{
        setShowGroupTextArea();
    },5000)
    return (
      <div className='body'>
        {showPopup ? (
          <div className="successbody">
            <div className="popup">
              {errorPopup ? (
                <>
                  <h3 className='success' style={{ color: "red" }}>Error</h3>
                  {error && <p className="para">{error}</p>}
                  <button className="closebutton" onClick={closePopup}>Close</button>
                </>
              ) : (
                <>
                  <h3 className='success' style={{ color: "green" }}>Success</h3>
                  <p className="para">Contact saved successfully!</p>
                  <button className="closebutton" onClick={closeePopup}>Ok</button> 
                </>
              )}
            </div>
          </div>
     
      ):(
      <div className='form-container'>
        <div className='form-box'>
        <div className='header'><h3>Create New Personal Contact</h3></div>
        <form onSubmit={handleSubmit} className='container'>
            <div className='container-column'>
              <div className='firstname'>
                <label htmlFor="firstname" className='label'>Firstname<b style={{color:"red"}}>*</b>
                <input type="text" 
                name="firstname"
                placeholder='Firstname'
                value={fname}
                onChange={(e)=>handleFnameChange(e)}             
                className='firstinputbox'
                onFocus={validateFname}
                />
                </label>
             </div>
             <div className='lastname'>
                <label htmlFor="lastname" className='label'>Lastname<b style={{color:"red"}}>*</b>
                <input type="text" 
                name="lastname"
                placeholder='Lastname'
                value={lname}
               onChange={(e)=>handleLnameChange(e)}
                className='lastinputbox'
                /> 
                </label>
            </div>
            </div>
               <div>
                <label className='label'>RelationShip <br></br>
               <select value={relationship}   
               className='relationinputbox'
               onChange={(e)=>handleRelationShipChange(e)}>
                <option value=" ">--Select--</option>
                <option value="father">Father</option>
                <option value="mother">Mother</option>
                <option value="brother">Brother</option>
                <option value="uncle">Uncle</option> 
                <option value="aunty">Aunty</option>
                <option value="cousin">Cousin</option>
                <option value="sister">Sister</option>        
               </select>
               </label><br></br>
            </div>
            <div>
                <label htmlFor="phonenumber" className='label'>Phone number<b style={{color:"red"}}>*</b>
                <br></br><input type="number" 
                name="phonenumber"
                placeholder='Phone number'
                value={phoneNumber}
                onChange={(e)=>handlePhoneNumberChange(e)} 
                className='phonenumberinputbox'
                />
                </label>
            </div>
            <div>
                <label htmlFor="email" className='label'>Email Address<b style={{color:"red"}}>*</b>
               <br></br> <input type="text" 
                name="email"
                placeholder='Email Address'
                value={email}
                onChange={(e)=>handleEmailChange(e)} 
                className='emailinputbox'
                />
                </label>
                </div>
            <div>
                <label htmlFor="address" className='label'>Address <br></br>
               <input type="text" 
                name="address"
                placeholder='Address'
                value={address}
                onChange={(e)=>handleAddressChange(e)} 
                className='addressinputbox'
                id="address"
                />
                 </label>
                
            </div>  
            <div className='container-column'>
              <div className='city'>
                <label htmlFor="city" className='label'>CityStateZip
               <input type="number" 
                name="city"
                placeholder='City State Zip'
                value={cityZipCode}
                onChange={(e)=>handleCityZipCodeChange(e)} 
                className='inputbox'
                id='inputmargin'
                /> 
                </label>
                
                </div>
             <div className='scndnumber'>
                
                <label htmlFor="secondPhoneNumber" className='label'>2nd phone
                <input type="number" 
                name="secondPhoneNumber"
                placeholder='2nd phone'
                value={secondPhoneNumber}
                onChange={(e)=>handleSecondPhoneNumberChange(e)} 
                className='inputbox'
                id='inputmargin'
                />
                </label>
                   
            </div>
            </div>
            <div className='container-column'>
              <div className='title'> 
                <label htmlFor="jobtitle" className='label'>Job title
                <input type="text" 
                name="jobtitle"
                placeholder='Job title'
                value={jobtitle}
                onChange={(e)=>handleJobTitleChange(e)} 
                className='inputbox'
               /> 
              </label>
          </div>
          <div className='department'>
          <label className='label'>Department
         <input type="text" 
          name="department"
          placeholder='Department'
          value={department}
          onChange={(e)=>handleDepartmentChange(e)} 
          className='inputbox'
         />
       </label>
      </div> 
     </div>
     <div>
         <label className='label'>groups <br></br> <span style={{color:"red"}}>required *</span>
         <a onClick={handleAddTogroup} className='add'> Add to groups</a><br></br>
         {showGroupTextArea?(
         <textarea rows='5' cols="50" className='textarea'>No groups available</textarea>
          ):(
        <p></p>
       )}
       </label>
     </div>
    <div className='buttons'>
         <a className='cancel' onClick={handleCancel}><b>Cancel</b><b> | </b></a>
         <button className='savebutton' onClick={handle}>
         Save Contact</button>
    </div>
       </form>
      </div> 
   </div>
      )}
 </div> 
 )
} 
 


