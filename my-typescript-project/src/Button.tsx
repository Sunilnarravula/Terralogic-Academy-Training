import React from "react";
 const Button = (props: {name: string })=> {
    const { name } = props;
    return(
        <button style={{backgroundColor:'gold',padding:'auto',marginLeft:"10px",marginBottom:"20px",color:'black'}}>
            {name}
        </button>
    );
 }

 export default Button;