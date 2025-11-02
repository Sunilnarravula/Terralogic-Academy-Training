 import React from "react";
import { useNavigate } from "react-router-dom";

function ButtonNavigation() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/success');
  }

  return(
    <form onSubmit={handleSubmit}>
        {/*...form input*/}
        <button> type='submit'</button>
    </form>
  )
   
}

export default ButtonNavigation;
