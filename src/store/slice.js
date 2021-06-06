import { createSlice } from '@reduxjs/toolkit';

import asyncActions from './asyncThunks';
import selectors from './selectors';

const initialState = {
  param1: 1,
  data: null,
};

const extraReducers = {
  [asyncActions.getData.fulfilled]: (state, { payload: data }) => {
    state.data = data;
  },
};

const reducers = {
  setParam1(state, { payload: param1 }) {
    state.param1 = param1;
  },
};

const { actions, reducer } = createSlice({
  name: 'store',
  reducers,
  initialState,
  extraReducers,
});

export { actions, selectors, asyncActions };

export default reducer;
