import React from 'react';
import Timer from 'react-compound-timer';

const View = ({ time, isRefresh }) => (
  <div>
    Timer
    <Timer initialTime={time * 60 * 1000} direction="backward">
      {({ start, resume, pause, stop, reset, timerState }) => {
        if (isRefresh) {
          reset();
        }
        return (
          <React.Fragment>
            <div>
              <Timer.Minutes />
              <span>:</span>
              <Timer.Seconds />
            </div>
            <div>
              <button onClick={start}>Start</button>
              <button onClick={pause}>Pause</button>
              <button onClick={resume}>Resume</button>
            </div>
          </React.Fragment>
        );
      }}
    </Timer>
  </div>
);

export default View;
