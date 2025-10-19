import React from 'react';
import logo from './logo.svg';
import Button from './Button';
import Cards from './Cards';
import MyClassComponent from './MyClassComponent';
 import './App.css';


function App() {
  return (
    <div className='App'>
      <Button name="Sunil"/>
      <Button  name="Naidu"/>
      <Button  name="Narravula"/>
      
      <div className="card-container"> 
      <Cards name="Sunil" age={24} gender="Male" />
      <Cards name="srinu" age={22} gender="Male" />
      <Cards name="Anu" age={21} gender="Female" />
      </div>
<MyClassComponent/>
    </div>
  )
}

export default App;
