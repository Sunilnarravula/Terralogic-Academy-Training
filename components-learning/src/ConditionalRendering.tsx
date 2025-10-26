import React from 'react'
type Iprops={
    isLoggedIn: boolean;
    defaultprop ?: boolean;
};

const ConditionalRendering = (props:Iprops) => {

    const { isLoggedIn ,defaultprop = " No val from Parent"} = props;
    console.log ("defaultprop", defaultprop);

    const checkifUserHashAccount = (hashAccount: boolean)=>{
        if(hashAccount) return <h1> User CAn Login</h1>;
        return <h1> User Need to Register</h1>
    };
  return (
    <div>{isLoggedIn ? <h1>Yes, Login</h1> : checkifUserHashAccount(false)}</div>
    
  )
}

export default ConditionalRendering