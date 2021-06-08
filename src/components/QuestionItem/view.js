import React from 'react';
import cn from 'classnames';

import styles from './styles.scss';

const View = ({ text, setCorrect, isActive, setIsActive, isCorrected, setIsCorrected }) => {
  const diactive = isActive ? null : styles.diactive;
  const answerStyle = isCorrected ? styles.ok : styles.misstake;
  const status = isActive ? null : answerStyle;

  return (
    <div className={cn(styles.container, diactive, status)}>
      <span>{text}</span>
      <button
        disabled={!isActive}
        onClick={() => {
          setIsCorrected(true);
          setCorrect(1);
          setIsActive(false);
        }}
      >
        Верно
      </button>
      <button
        disabled={!isActive}
        onClick={() => {
          setIsCorrected(false);
          setCorrect(0);
          setIsActive(false);
        }}
      >
        Не верное
      </button>
    </div>
  );
};

export default View;
