import { connect } from 'react-redux';

import { actions } from 'store/slice';

import Controller from './controller';

const mapStateToProps = (state) => ({
  questions: state.data,
  isRefresh: state.isRefresh,
});

const mapDispatchToProps = {
  setData: actions.setData,
  setIsRefresh: actions.setIsRefresh,
};

const ConnectedView = connect(mapStateToProps, mapDispatchToProps)(Controller);

export default ConnectedView;
