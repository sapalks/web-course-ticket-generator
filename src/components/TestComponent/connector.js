import { connect } from 'react-redux';

import { actions, selectors, asyncActions } from 'store/slice';

import View from './view';

const mapStateToProps = (state) => ({
  param1: selectors.getParam1(state),
});

const mapDispatchToProps = {
  setParam1: actions.setParam1,
  getData: asyncActions.getData,
};

const ConnectedView = connect(mapStateToProps, mapDispatchToProps)(View);

export default ConnectedView;
