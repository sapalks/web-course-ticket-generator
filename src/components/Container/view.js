import React from 'react';

import Timer from 'components/Timer';
import QuestionList from 'components/QuestionList';
import NextButton from 'components/NextButton';

import styles from './styles.scss';

const View = ({ count }) => (
  <div>
    <div className={styles.left}>
      <Timer />
      <div className={styles.result}>
        Результат:
        <div>{count}</div>
      </div>
      <NextButton />
    </div>
    <QuestionList />
  </div>
);

export default View;
