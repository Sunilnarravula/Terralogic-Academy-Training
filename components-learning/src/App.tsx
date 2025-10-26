 import ButtonCheckComponent from "./components/ButtonCheckcom";
 import Counter from "./components/increment"
 import CounterClass from "./components/ClassComponents"
import DataBinding from "./components/DataBindingComponent";
import ParentComponent from "./components/ParentComponent";
 
 
 
 const App = ()=>{
  return(
     <>
     {/* <Counter/>  */}
    {/* <ButtonCheckComponent/> */}
    <CounterClass/>
     {/* <DataBinding/> */}
     <DataBinding/>
     <ParentComponent/>
    </>
  )
 }

 export default App