import React from 'react';
import { Provider as StoreProvider } from 'react-redux';

import TestPage from 'pages/TestPage';
import store from 'store';

const App = () => (
  <StoreProvider store={store}>
    <TestPage />
  </StoreProvider>
);

export default App;
