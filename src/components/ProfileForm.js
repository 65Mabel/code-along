import React, { useState } from 'react'

const Profileform = ({submit}) => {
const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
});
const handleChange = (e) =>{
    const {name, value} = e.target;
    setProfile(prevState => ({...profile, [name]: value}))
}

const handleSubmit = (e) =>{
e.preventDefault();
submit (profile);
setProfile({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
})
}

  return (<form onSubmit={handleSubmit}>
<fieldset>
    <legend>Personal Information </legend>
    <input type="text" 
    name= "firstName"
     onChange={handleChange} 
     value={profile.firstName} 
    />

    <input type="text" 
    name=  "lastName" 
    onChange={handleChange}
     value={profile.lastName}
     />

    <input type="text"
     name= "email"
      onChange={handleChange} 
      value={profile.email}
     />

    <input type="text"
     name= "phone"
      onChange={handleChange} 
     value={profile.phone}
     />
</fieldset>
<button className='form'>Add writer</button>
  </form>)
    

  
}

export default Profileform