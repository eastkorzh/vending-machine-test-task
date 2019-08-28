import { combineReducers } from 'redux';
import itemsGrid from './modules/itemsGrid/reducer';
import money from './modules/money/reducer';
import orderModal from './modules/orderModal/reducer';

export default combineReducers({
  itemsGrid,
  money,
  orderModal,
});
