import { createSlice } from '@reduxjs/toolkit';

import selectors from './selectors';

const initialState = {
  time: 5,
  data: [],
  count: 0,
  isRefresh: false,
};

const reducers = {
  setData(state, { payload: data }) {
    state.data = data;
  },
  setCorrect(state, { payload: count }) {
    if (count === null) {
      state.count = 0;
    }

    state.count += count;
  },
  drop(state) {
    state.time = 5;
    state.data = [];
    state.count = 0;
    state.isRefresh = true;
  },
  setIsRefresh(state, { payload: isRefresh }) {
    state.isRefresh = isRefresh;
  },
};

const { actions, reducer } = createSlice({
  name: 'store',
  reducers,
  initialState,
});

export { actions, selectors };

export default reducer;
