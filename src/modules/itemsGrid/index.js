import { connect } from 'react-redux';

import ItemsGrid from './component';
import * as actions from './actions'

const mapStateToProps = store => ({
  items: store.itemsGrid.items || [],
  currency: store.money.currency,
});

const mapDispatchToProps = {
  requestItems: actions.requestItems,
  pickItem: actions.pickItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemsGrid);
