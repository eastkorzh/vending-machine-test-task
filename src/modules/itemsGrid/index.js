import { connect } from 'react-redux';

import { getItems } from '../API/localStorage'
import ItemsGrid from './component';
import * as actions from './actions'

const mapStateToProps = store => ({
  items: getItems(),
  currency: 'RUB',
});

const mapDispatchToProps = {
  buyItem: actions.buyItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemsGrid);
