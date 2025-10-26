function ButtonCheckComponent(){
    const handleClick=()=>{
        alert('Button was Clicked!');
    };

    return(
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height:'69vh', margin: '100px' }}>
            <button 
                onClick={handleClick}
                style={{ backgroundColor: '#3cff00ff',
                     fontSize: '24px',
                    padding: '12px 24px'
                 }}
            >
                Click me
            </button>
        </div>
    )
}

export default ButtonCheckComponent