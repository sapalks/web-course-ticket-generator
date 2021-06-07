import { connect } from 'react-redux';

import View from './view';

const mapStateToProps = (state) => ({
  time: state.time,
  isRefresh: state.isRefresh,
});

const ConnectedView = connect(mapStateToProps)(View);

export default ConnectedView;
