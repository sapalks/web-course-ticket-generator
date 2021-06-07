import { connect } from 'react-redux';

import { actions } from 'store/slice';

import View from './view';

const mapDispatchToProps = {
  drop: actions.drop,
};

const ConnectedView = connect(null, mapDispatchToProps)(View);

export default ConnectedView;
