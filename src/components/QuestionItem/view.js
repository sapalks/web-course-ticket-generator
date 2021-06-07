import React from 'react';

import styles from './styles.scss';

const View = ({ text, setCorrect, isActive, setIsActive }) => (
  <div className={styles.container}>
    <span>{text}</span>
    <button
      disabled={!isActive}
      onClick={() => {
        setCorrect(1);
        setIsActive(false);
      }}
    >
      Верно
    </button>
    <button
      disabled={!isActive}
      onClick={() => {
        setCorrect(0);
        setIsActive(false);
      }}
    >
      Не верное
    </button>
  </div>
);

export default View;
