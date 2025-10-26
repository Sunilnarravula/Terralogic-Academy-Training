function Greeting(props : any){
    return (
        <div>
            {props.isLoggedIn?(
                props.isAuthorized ? <h1>You Are Authorized</h1> :<h1>You are not Allowed</h1>
            
            ):(
                <h1>pleaselogin</h1>
            
            )}
        </div>
    )
}

export default Greeting