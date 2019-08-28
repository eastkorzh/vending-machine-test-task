import { connect } from 'react-redux';

import * as actions from './actions';
import ErrorModal from './component';

const mapStateToProps = store => ({
  message: store.orderModal.error,
});

const mapDispatchToProps = {
  clearErrors: actions.clearErrors,
};

export default connect(mapStateToProps, mapDispatchToProps)(ErrorModal);
