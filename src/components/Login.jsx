import axios from "axios";
import React, {useState} from "react";

function Login(){
    const[vehicleNum, setVehicleNum] = useState("");

    
    function loginVehicle(e){
        console.log(vehicleNum);
        let l = "http://localhost:4000/driver/"+vehicleNum;
        
        axios.get(l).then(function (response) {
            response.data.map( (x) => {
                let vID = x.vehicleID;
                let dName = x.name;
                console.log(vID,dName);
                window.location = '/drive?i='+vID+'&n='+dName;
            })
            // console.log(response.data[0].cost)
            // console.log(response.data);
          })
          .catch(function (error) {
            console.log(error);
          })
          .then(function () {
            // always executed
          });
          
        
    }

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
                        value={ vehicleNum }
                        onChange={ (e) => { setVehicleNum(e.target.value) } }
                    />
                    <button 
                        onClick={loginVehicle}
                        className="btn btn-lg btn-outline-primary col-md-9 ml-5">
                        Let's Drive!</button>
                </div>
            </div>
        </div>
    );
}

export default Login;