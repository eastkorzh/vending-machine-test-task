import { connect } from 'react-redux';

import * as actions from './actions';
import CurrencyChanger from './component';

const mapStateToProps = store => ({
  currency: store.money.currency,
});

const mapDispatchToProps = {
  changeCurrency: actions.changeCurrency,
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyChanger);
