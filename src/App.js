import './App.css';
import React, {useState, setState} from 'react'
import { useTimer } from 'react-timer-hook';
import DarkModeToggle from "react-dark-mode-toggle";
import logo from "./h2go.svg"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle, faPauseCircle, faPlusCircle, faMinusCircle, faStopCircle} from '@fortawesome/free-solid-svg-icons'



function MyTimer({ expiryTimestamp }) {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    onExpire,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp, onExpire: () => console.log('onExpire called') });
  

  const [customTime, setCustomTime] = useState(0)


  return (
    <div style={{textAlign: 'center'}}>
    
      <h1>H2GO</h1>
      <img src={logo} className="logo"/>
      <div style={{fontSize: '100px'}}>
       <span> {minutes}</span>:<span>{seconds}</span>
      </div>
      {isRunning ? 
      <div>
      <div className="ocean">
        <div className="wave "></div>
        <div className="wave "></div>
      </div>
      <FontAwesomeIcon icon={faPauseCircle} onClick={pause} className="stop" />
      </div>
      : 
      <div>
      <div className="ocean">
        <div className="wave pause-animation"></div>
        <div className="wave pause-animation"></div>
      </div>
      <FontAwesomeIcon icon={faPlayCircle} onClick={start} className="start"/> 
      <FontAwesomeIcon icon={faStopCircle} onClick={restart} className="start"/> 
      <div className="buttons">
        <FontAwesomeIcon icon={faPlusCircle} onClick={(e)=>setCustomTime(customTime+1)} className="plus"/> 
        <FontAwesomeIcon icon={faMinusCircle} onClick={(e)=>setCustomTime(customTime-1)} className="minus"/> 
      </div>
      <input type="number" onChange={(e)=>setCustomTime(e.target.value)}></input>
      </div>
      }

      <button onClick={() => {
        // Restarts to 5 minutes timer
        console.log(customTime)
        let new_time = customTime * 60
        const time = new Date();
        time.setSeconds(time.getSeconds() + new_time);
        restart(time)
      }}>Restart</button>
    </div>
  );
}

export default function App() {

  const time = new Date();
  time.setSeconds(time.getSeconds() + 500); // 10 minutes timer
  return (
    <div>
   
      <MyTimer expiryTimestamp={time} />
    </div>
  );
}