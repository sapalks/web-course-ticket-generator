import React from 'react';
import Timer from 'react-compound-timer';

import styles from './styles.scss';

const View = ({ time, isRefresh }) => (
  <div className={styles.timer}>
    Timer
    <Timer initialTime={time * 60 * 1000} direction="backward">
      {({ start, resume, pause, stop, reset, timerState }) => {
        if (isRefresh) {
          reset();
        }
        return (
          <React.Fragment>
            <div className={styles.time}>
              <Timer.Minutes />
              <span>:</span>
              <Timer.Seconds />
            </div>
            <div>
              <button onClick={start}>Start</button>
              <button onClick={pause}>Pause</button>
            </div>
          </React.Fragment>
        );
      }}
    </Timer>
  </div>
);

export default View;
