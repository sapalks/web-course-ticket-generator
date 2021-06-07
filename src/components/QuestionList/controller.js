import React, { useEffect } from 'react';

import View from './view';

import questions from '../../questions';

const Controller = ({ setData, isRefresh, setIsRefresh, ...rest }) => {
  useEffect(() => {
    setData(questions);
    setIsRefresh(false);
  }, [isRefresh]);

  return <View {...rest} />;
};

export default Controller;
