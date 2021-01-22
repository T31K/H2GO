import './App.css';
import React, {useState} from 'react'
import { useTimer } from 'react-timer-hook';
import DarkModeToggle from "react-dark-mode-toggle";
import logo from "./h2go.svg"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle, faPauseCircle } from '@fortawesome/free-solid-svg-icons'

function MyTimer({ expiryTimestamp }) {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });


  return (
    <div style={{textAlign: 'center'}}>
    
      <h1>H2GO</h1>
      <img src={logo} className="logo"/>
      <div style={{fontSize: '100px'}}>
       <span>0{minutes}</span>:<span>{seconds}</span>
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
      </div>
      }

      {/* <button onClick={() => {
        // Restarts to 5 minutes timer
        const time = new Date();
        time.setSeconds(time.getSeconds() + 300);
        restart(time)
      }}>Restart</button> */}
    </div>
  );
}

export default function App() {

  const time = new Date();
  time.setSeconds(time.getSeconds() + 600); // 10 minutes timer
  return (
    <div>
   
      <MyTimer expiryTimestamp={time} />
    </div>
  );
}