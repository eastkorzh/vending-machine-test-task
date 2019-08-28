import { connect } from 'react-redux';

import * as actions from './actions';
import SuccessModal from './component';

const mapStateToProps = store => ({
  boughtItem: store.orderModal.boughtItem,
});

const mapDispatchToProps = {
  clearBought: actions.clearBought,
};

export default connect(mapStateToProps, mapDispatchToProps)(SuccessModal);
