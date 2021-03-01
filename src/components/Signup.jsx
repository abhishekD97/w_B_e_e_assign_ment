import React from "react";

function Signup(){
    return (
        <div>
            <div className="c">
                <h1 className="as text-white mr-4">Taxi On The Go!</h1>
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
                    <input 
                        type="text"
                        className="col-md-9 form-control mx-auto"
                        placeholder="Enter Previous Ratings"
                    />
                    <input 
                        type="text"
                        className="col-md-9 form-control mx-auto"
                        placeholder="Enter Previous Trips Completed"
                    />
                    <input 
                        type="text"
                        className="col-md-9 form-control mx-auto"
                        placeholder="Enter Cost Per Km"
                    />
                    <input 
                        type="text"
                        className="col-md-9 form-control mx-auto"
                        placeholder="Location Of Taxi Service"
                    />
                    <input 
                        type="text"
                        className="col-md-9 form-control mx-auto"
                        placeholder="Existing State"
                    />
                    <button 
                        className="btn btn-lg btn-outline-primary col-md-9 ml-5">
                        Let's Drive!</button>
                </div>
            </div>
        </div>
    );
}

export default Signup;