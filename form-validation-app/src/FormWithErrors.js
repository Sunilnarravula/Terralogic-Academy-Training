import React, { useState }from 'react'

const FormWithErrors = () => {
    const [formData, setFormData]= useState({ name:"", email:""});
    const [errors,setErrors]= useState({});
    //handle input changes
    const handleChange =(e) =>{
        const { name, value} =e.target;
        setFormData((prev)=> ({
            ...prev,
            [name]:value,
        }));
    };
    // validation form inputs
    const validate =() => {
        let tempErrors ={};
        if(!formData.name.trim()) tempErrors.name = "Name is required.";
        if(!formData.email.trim()) tempErrors.email ="Email is required.";
        else if (!/\S+@\S+\.\S+/.test(formData.email))
            tempErrors.email="Enter a valid email."
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;

    };
    // handle form submission
     const handlesubmit =(e) =>{
        e.preventDefault();
        if(validate()){
            console.log ("Form is valid:", formData);
            alert("Form submitted successfully!");
            setErrors({name:"", email:""}); // reset after submission
            setErrors({});

        }
     }

  return (
     <form 
     onSubmit={handlesubmit}
     style={{maxWidth:300,margin:"20px auto"}}>
        <div style={{mariginButtm:10}}>
         <label>Name:</label>
         <br/>
         <input 
         name="name"
         value={formData.name}
         onChange={handleChange}
         placeholder="Enter your Name"
         style={{ width:"100%",padding:5}}
         />
         {errors.name && <p style={{ color: "red"}}>{errors.name}</p>}
         </div>
         <div style={{marginButtom:10}}>
            <label>Email:</label>
            <br/>
            <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your Email"
            style={{ width:"100%",padding:5}}/>
            {errors.email && <p style={{ color:"red"}}>{errors.email}</p>}
         </div>

         <button type="submit" style={{ padding:"6px 12px"}}>
            submit
         </button>
     </form>
  )
}

export default FormWithErrors