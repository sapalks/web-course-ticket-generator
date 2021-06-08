import React, { useState } from 'react';

import View from './view';

const Controller = ({ setData, isRefresh, setIsRefresh, ...rest }) => {
  const [isActive, setIsActive] = useState(true);
  const [isCorrected, setIsCorrected] = useState(null);

  return (
    <View
      {...rest}
      isActive={isActive}
      setIsActive={setIsActive}
      isCorrected={isCorrected}
      setIsCorrected={setIsCorrected}
    />
  );
};

export default Controller;
