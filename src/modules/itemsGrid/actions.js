import * as AT from './action-types';
import { getItems } from '../API/localStorage'

export const requestItems = () => ({
  type: AT.REQUEST_ITEMS,
  payload: {
    items: getItems(),
  }
});

export const pickItem = ({ item }) => ({
  type: AT.PICK_ITEM,
  payload: {
    item,
  }
});

export const unpickItem = () => ({
  type: AT.UNPICK_ITEM,
});
