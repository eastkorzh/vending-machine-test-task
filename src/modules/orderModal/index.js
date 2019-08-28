import { connect } from 'react-redux';

import * as actions from './actions';
import OrderModal from './component';
import { unpickItem } from '../itemsGrid/actions'

const mapStateToProps = store => ({
  moneyAmount: store.money.moneyAmount,
  currency: store.money.currency,
  item: store.itemsGrid.pickedItem,
});

const mapDispatchToProps = {
  buyItem: actions.buyItem,
  buyItemFail: actions.buyItemFail,
  unpickItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderModal);
