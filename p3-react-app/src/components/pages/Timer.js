import React, { useEffect, useState } from "react";

function Timer() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [minutesTimer, setMinutesTimer] = useState(0);
  const [secondsTimer, setSecondsTimer] = useState(0);
  const [minutesErrMessage, setMinutesErrMessage] = useState("");
  const [secondsErrMessage, setSecondsErrMessage] = useState("");
  const [timerStatus, setTimerStatus] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (timerStatus && secondsTimer > 0) {
        setSecondsTimer(secondsTimer - 1);
      }
      if (timerStatus && secondsTimer === 0) {
        if (timerStatus && minutesTimer === 0) {
          clearInterval(timer);
          alert("PROCESS DONE!");
        } else {
          setMinutesTimer(minutesTimer - 1);
          setSecondsTimer(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  });

  const startTimer = () => {
    if (minutes <= 59 || "") {
      setMinutesErrMessage("");
    } else {
      setMinutesErrMessage("Please enter 0-59 only");
    }

    if (seconds <= 59 || "") {
      setSecondsErrMessage("");
    } else {
      setSecondsErrMessage("Please enter 0-59 only");
    }

    if (seconds <= 59 && minutes <= 59) {
      setMinutesTimer(minutes);
      setSecondsTimer(seconds);
      setSeconds(0);
      setMinutes(0);
      setTimerStatus(true);
    }
  };

  return (
    <div className="timer-container">
      <h2>Timer</h2>
      <div className="timer-content">
        <div className="timer-display">
          {minutesTimer}:{secondsTimer < 10 ? `0${secondsTimer}` : secondsTimer}
        </div>
        <div className="input-grp">
          <label>Enter minutes: (0-59)</label>
          <input
            type="number"
            min="0"
            max="59"
            value={minutes}
            onChange={(e) => setMinutes(e.target.value)}
          ></input>
          <small style={{ color: "red", marginBottom: "0.5em" }}>
            {minutesErrMessage}
          </small>
          <label>Enter seconds: (0-59)</label>
          <input
            type="number"
            min="0"
            max="59"
            value={seconds}
            onChange={(e) => setSeconds(e.target.value)}
          ></input>
          <small style={{ color: "red", marginBottom: "0.5em" }}>
            {secondsErrMessage}
          </small>
          <button
            type="button"
            className="btn btn-success"
            onClick={startTimer}
          >
            Start
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setTimerStatus(true)}
          >
            Resume
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => setTimerStatus(false)}
          >
            Stop
          </button>
        </div>
      </div>
    </div>
  );
}

export default Timer;
