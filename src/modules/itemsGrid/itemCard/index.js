import { connect } from 'react-redux';

import ItemCard from './component';

const mapStateToProps = store => ({
  currency: store.money.currency,
});

export default connect(mapStateToProps, null)(ItemCard);
