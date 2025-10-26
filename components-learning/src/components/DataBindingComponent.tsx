import React,{useState} from "react";

const DataBinding =()=>{
    const [inputval,setInputVal] = useState<string>('')
    const [password,setPassword] = useState('')
    const submitHandler =(e: any)=>{
           
                e.preventDefault();
                console.log('submitting:',inputval)
                console.log('submitting password:', password)        
    }
    const handleType =(e:any)=>{
                setInputVal(e.target.value)
                 console.log('typed character:',e.target.value)
            }
            const handlePassword = (e:any)=>{
                setPassword(e.target.value)
            }

    return(
                <form onSubmit={submitHandler}>
                    <input type='text placeholder=Enter Your Name' value={inputval} onChange={handleType}/>
                    <input type='password' placeholder='Enter your Password' value={password} onChange={handlePassword}/>
                    <button>Submit</button>
                </form>
            )


}
export default DataBinding