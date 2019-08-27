import { connect } from 'react-redux';

import * as actions from './actions';
import Money from './component';

const mapStateToProps = store => ({
  moneyAmount: store.money.moneyAmount,
  currency: store.money.currency,
});

const mapDispatchToProps = {
  addMoney: actions.addMoney,
  removeMoney: actions.removeMoney,
};

export default connect(mapStateToProps, mapDispatchToProps)(Money)