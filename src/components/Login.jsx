import React from "react";

function Login(){
    return (
        <div>
            <div className="c">
                <h1 className="as mr-4">Taxi On The Go</h1>
                <div className="inputs">
                    <input 
                        type="text"
                        className="col-md-9 form-control mx-auto"
                        placeholder="Enter First Name"
                    />
                    <input 
                        type="text"
                        className="col-md-9 form-control mx-auto"
                        placeholder="Enter Last Name"
                    />
                    <input 
                        type="text"
                        className="col-md-9 form-control mx-auto"
                        placeholder="Enter Vehicle Number Without spaces"
                    />
                    <button 
                        className="btn btn-lg btn-outline-primary col-md-9 ml-5">
                        Let's Drive!</button>
                </div>
            </div>
        </div>
    );
}

export default Login;