import React from 'react';

import QuestionItem from 'components/QuestionItem';

const getQuestionsList = (questions) => {
  const randomQuestionsIndex = [1, 1, 1, 1, 1, 1].map(() =>
    Math.floor(Math.random() * questions.length),
  );
  const indexList = questions.filter((item, index) => randomQuestionsIndex.includes(index));
  const questionsList = indexList.map((question) => (
    <QuestionItem key={question} text={question} />
  ));

  return questionsList;
};

const View = ({ questions }) => {
  const questionsList = getQuestionsList(questions);

  return <>{questionsList}</>;
};

export default View;
