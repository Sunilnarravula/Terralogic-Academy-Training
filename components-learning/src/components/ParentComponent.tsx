 import ChildComponent from "./ChildComponent";

function ParentComponent(){
    const handleChildClick=()=>{
        alert('Alert from the child!');
    };

    return(
        <ChildComponent on ButtonClick={handleChildClick}/>
    );
}
export default ParentComponent