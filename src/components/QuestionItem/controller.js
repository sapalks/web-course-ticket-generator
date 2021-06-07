import React, { useState } from 'react';

import View from './view';

const Controller = ({ setData, isRefresh, setIsRefresh, ...rest }) => {
  const [isActive, setIsActive] = useState(true);

  return <View {...rest} isActive={isActive} setIsActive={setIsActive} />;
};

export default Controller;
