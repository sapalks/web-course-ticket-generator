import { connect } from 'react-redux';

import View from './view';

const mapStateToProps = (state) => ({
  count: state.count,
});

const ConnectedView = connect(mapStateToProps)(View);

export default ConnectedView;
