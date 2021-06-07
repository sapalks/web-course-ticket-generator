import { connect } from 'react-redux';

import { actions } from 'store/slice';

import Controller from './controller';

const mapDispatchToProps = {
  setCorrect: actions.setCorrect,
};

const ConnectedView = connect(null, mapDispatchToProps)(Controller);

export default ConnectedView;
