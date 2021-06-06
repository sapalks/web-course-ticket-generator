import generateAsyncThunk from 'utils/generateAsyncThunk';

import getData from 'api/getData';

const asyncActions = {
  getData: generateAsyncThunk('store/getData', getData),
};

export default asyncActions;
