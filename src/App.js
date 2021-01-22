import './App.css';
import React, {useState} from 'react'
import { useTimer } from 'react-timer-hook';
import DarkModeToggle from "react-dark-mode-toggle";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faStop } from '@fortawesome/free-solid-svg-icons'

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
          <div className="ocean">
      <div className="wave"></div>
      <div className="wave"></div>
      
    </div>
      <h1>H2GO</h1>
      <div style={{fontSize: '100px'}}>
       <span>0{minutes}</span>:<span>{seconds}</span>
      </div>
      <p>{isRunning ? 'Running' : 'Not running'}</p>
      <FontAwesomeIcon icon={faPlay} onClick={start} className="start" />
      <FontAwesomeIcon icon={faStop} onClick={pause} className="stop"/>
      <button onClick={() => {
        // Restarts to 5 minutes timer
        const time = new Date();
        time.setSeconds(time.getSeconds() + 300);
        restart(time)
      }}>Restart</button>
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