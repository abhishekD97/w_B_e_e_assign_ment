import React, {useState} from "react";

function DriveMode(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const[driverName] = useState(urlParams.get('n'));
    const[vehicleNum] = useState(urlParams.get('i'));
    
    const [startTime,setStartTime] = useState("00:00");
    const [endTime, setEndTime] = useState("00:00");
    const [timer, setTimer] = useState("00:00");

    function setTimeFunction(){
        var d = new Date();
        var h = d.getHours() + 1;
        var m = d.getMinutes() + 1;
        var s = d.getSeconds() + 1;
        var time = h.toString() + ":" + m.toString() + ":" + s.toString() ; 
        setStartTime(time);
    }

    function setEndTimeFunction(){
        var d = new Date();
        var h = d.getHours() + 1;
        var m = d.getMinutes() + 1;
        var s = d.getSeconds() + 1;
        var time = h.toString() + ":" + m.toString() + ":" + s.toString(); 
        setEndTime(time);
    }

    function timerFunction(){
        let hS = startTime.slice(0,2);
        let hE = endTime.slice(0,2);
        let hoursD = parseInt(hS)-parseInt(hE);
        let mS = startTime.slice(3,5);
        let mE = endTime.slice(3,5);
        let minutesD = parseInt(mS)-parseInt(mE);
        let sS = startTime.slice(6,8);
        let eS = endTime.slice(6,8);
        let secondsD = parseInt(sS)-parseInt(eS);
        let difference = hoursD.toString() + ":" + minutesD.toString() + ":" + secondsD.toString() ;
        console.log(difference)
        setTimer(difference)
    }

    function fakeF(){
        timerFunction();
        setEndTimeFunction();
    }

    return (
    <div className="granpa">
        <div className="parent">
            <div className="child">
                <span style={{display:"inline-block"}} className="ml-3 mt-2">{driverName}</span>
                <span style={{float:"right", display:"inline-block"}} className="mr-3 mt-2">Trip Start Time:{startTime}</span>
                <br/>
                <span style={{display:"inline-block"}} className="ml-3 mt-2">{vehicleNum}</span>
                <span style={{float:"right", display:"inline-block"}} className="mr-3 mt-2">Trip End Time:{endTime}</span>
            </div>
            <div className="child">
                <button style={{borderRadius:"0",width:"10rem"}} onClick={setTimeFunction} className="row btn btn-lg btn-outline-primary mt-4">Start</button>
                <input disabled value={timer} style={{borderRadius:"3px",width:"10rem", marginTop:"4rem", marginBottom:"3rem", border:"1px solid",cursor:"default", textAlign:"center"}} className="row mx-auto" />
                <button style={{borderRadius:"0",width:"10rem"}} onClick={ fakeF } className="row btn btn-lg btn-outline-primary mt-3">End</button>
            </div>
        </div>
    </div>
    );
}

export default DriveMode;