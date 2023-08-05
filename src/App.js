import React, { useState } from "react";
import "./App.css";

import DisplayComponent from "./components/DisplayComponent";
import BtnComponent from "./components/BtnComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { GiSandsOfTime } from "react-icons/gi";

function App() {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);

  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
  };

  var updatedMs = time.ms,
    updatedS = time.s,
    updatedM = time.m,
    updatedH = time.h;

  const run = () => {
    if (updatedM === 60) {
      updatedH++;
      updatedM = 0;
    }
    if (updatedS === 60) {
      updatedM++;
      updatedS = 0;
    }
    if (updatedMs === 100) {
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTime({ ms: updatedMs, s: updatedS, m: updatedM, h: updatedH });
  };

  const stop = () => {
    clearInterval(interv);
    setStatus(2);
    setTime({ ms: updatedMs, s: updatedS, m: updatedM, h: updatedH });
  };

  const save = () => {
     setTime({ ms: updatedMs, s: updatedS, m: updatedM, h: updatedH });
    clearInterval(interv);
    setStatus(3);
   
  };

  const resume = () => start();

  // *******************************************************


  return (
    <div>
      <nav className="navbar navbar-light bg-primary mb-2">
        <div className="container-fluid">
          <span className="navbar-brand m-3 h1 text-white fw-bold">
            <GiSandsOfTime
              className="fw-bold w-25 h-25 "
              style={{ color: "whight" }}
            />
            &nbsp;Time-Tracking
          </span>
        </div>
      </nav>
      <div className="main-section ">
        <div className="clock-holder container-sm border border-primary m-auto bg-light">
          <div className="stopwatch m">
            <DisplayComponent time={time} />
            <BtnComponent
              status={status}
              resume={resume}
              save={save}
              stop={stop}
              start={start}
              time={time}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
