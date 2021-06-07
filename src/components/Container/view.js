import React from 'react';

import Timer from 'components/Timer';
import QuestionList from 'components/QuestionList';
import NextButton from 'components/NextButton';

const View = ({ count }) => (
  <div>
    <Timer />
    <QuestionList />
    <NextButton />
    <span>{`Результат: ${count}`}</span>
  </div>
);

export default View;
