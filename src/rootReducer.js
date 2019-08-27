import { combineReducers } from 'redux';
import itemsGrid from './modules/itemsGrid/reducer';
import money from './modules/money/reducer';

export default combineReducers({
  itemsGrid,
  money,
});
