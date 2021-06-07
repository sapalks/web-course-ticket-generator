import React from 'react';
import { Provider as StoreProvider } from 'react-redux';

import Container from 'components/Container';
import store from 'store';

const App = () => (
  <StoreProvider store={store}>
    <Container />
  </StoreProvider>
);

export default App;
