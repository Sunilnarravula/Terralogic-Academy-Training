 import React,{useState} from "react";

 function Counter(){
    const [count,setCount]= useState(0);

    const increment =()=>{
        setCount(count+1);
    };
     const decrement=()=>{
         
        setCount(Math.max(count - 1, 0));

     }
    return(
    <div>
        <p>Count:{count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>decrement</button>
    </div>
    );

 }

 export default Counter