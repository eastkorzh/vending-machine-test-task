import { connect } from 'react-redux';

import * as action from './actions';
import Money from './component';

const mapStateToProps = store => ({
  moneyAmount: store.money.moneyAmount,
  currency: store.money.currency,
});

const mapDispatchToProps = {
  addMoney: action.addMoney,
  removeMoney: action.removeMoney,
  changeCurrency: action.changeCurrency,
};

export default connect(mapStateToProps, mapDispatchToProps)(Money)