import React from "react";

function Landing(){

    function sign(e){
        let v = e.target.value
        console.log(v);
        if(v==="signup"){
            window.location = "/signup";
        }else{
            window.location = "/login";
        }
    }

    return (
        <div style={{marginTop:"40vh"}} className="granny">
        <button onClick={sign} value="login" className="btn btn-lg btn-outline-dark mr-2">Login</button>
        <button onClick={sign} value="signup" className="btn btn-lg btn-warning ml-2">Signup</button>
        </div>
    );
}

export default Landing;