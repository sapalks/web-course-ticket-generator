import React from 'react';

import QuestionItem from 'components/QuestionItem';

const maxQuestions = 6;
const getQuestionsList = (questions) => {
  if (!questions.length) {
    return null;
  }
  let indexes = [];
  for (let index = 0; index < maxQuestions; index++) {
    let number = indexes[indexes.length - 1] || 0;
    do {
      number += Math.random() * 20;
      number %= questions.length || 0;
      number = Math.round(number);
      if (!indexes.includes(number)) {
        break;
      }
    } while (true);
    indexes = [number, ...indexes];
  }
  const indexList = questions.filter((item, index) => indexes.includes(index));
  const questionsList = indexList.map((question) => (
    <div>
      {' '}
      <QuestionItem key={question} text={question} />
    </div>
  ));

  return questionsList;
};

const View = ({ questions }) => {
  const questionsList = getQuestionsList(questions);

  return (
    <>
      {' '}
      {questionsList}
      {' '}
    </>
  );
};

export default View;
