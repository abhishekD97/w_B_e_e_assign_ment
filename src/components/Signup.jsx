import React, { useState } from "react";
import axios from "axios";

function Signup(){

    const [name,setName] = useState();
    const [vehicleID,setVehicleID] = useState();
    const [rating,setRating] = useState();
    const [tripsCompleted,setTripsCompleted] = useState();
    const [cost, setCost] = useState();
    const [location, setLocation] = useState();
    const [state, set_State] = useState();

    function axiosPost(){
        const driverDetails = {
            name : name,
            vehicleID : vehicleID,
            rating : rating,
            tripsCompleted : tripsCompleted,
            cost : cost,
            location : location,
            state : state
        }
        axios.post('https://secure-falls-81966.herokuapp.com/driver', driverDetails)
        .then(function (response) {
            console.log(response);
            window.location = '/login';
          })
        .catch(function (error) {
            console.log(error);
          });
    }

    return (
        <div>
            <div className="c">
                <h1 className="as mr-4">Taxi On The Go!</h1>
                <div className="inputs">
                    <input 
                        type="text"
                        className="col-md-9 form-control mx-auto"
                        placeholder="Enter First Name"
                        autocomplete="off"
                        onChange={ (e) => setName(e.target.value) }
                        value={name}
                    />
                    <input 
                        type="text"
                        className="col-md-9 form-control mx-auto"
                        placeholder="Enter Last Name"
                        autocomplete="off"
                        
                    />
                    <input 
                        type="text"
                        className="col-md-9 form-control mx-auto"
                        placeholder="Enter Vehicle Number Without spaces"
                        autocomplete="off"
                        value={vehicleID}
                        onChange={ (e)=> setVehicleID(e.target.value) }
                    />
                    <input 
                        type="text"
                        className="col-md-9 form-control mx-auto"
                        placeholder="Enter Previous Ratings"
                        autocomplete="off"
                        onChange={ (e)=> setRating(e.target.value) }
                        value={rating}
                    />
                    <input 
                        type="text"
                        className="col-md-9 form-control mx-auto"
                        placeholder="Enter Previous Trips Completed"
                        autocomplete="off"
                        onChange={ (e)=> setTripsCompleted(e.target.value) }
                        value={tripsCompleted}
                    />
                    <input 
                        type="text"
                        className="col-md-9 form-control mx-auto"
                        placeholder="Enter Cost Per Km"
                        autocomplete="off"
                        onChange={ (e)=> setCost(e.target.value) }
                        value={cost}
                    />
                    <input 
                        type="text"
                        className="col-md-9 form-control mx-auto"
                        placeholder="Location Of Taxi Service"
                        autocomplete="off"
                        onChange={ (e)=> setLocation(e.target.value) }
                        value={location}
                    />
                    <input 
                        type="text"
                        className="col-md-9 form-control mx-auto"
                        placeholder="Existing State"
                        autocomplete="off"
                        value={state}
                        onChange={ (e)=> set_State(e.target.value) }
                    />
                    <button
                        onClick={axiosPost} 
                        className="btn btn-lg btn-outline-primary col-md-9 ml-5">
                        Let's Drive!</button>
                </div>
            </div>
        </div>
    );
}

export default Signup;