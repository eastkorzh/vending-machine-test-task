import React from 'react';

import ItemCard from '../itemsGrid/itemCard';
import styles from './styles.module.scss';

export default ({ 
  item, 
  moneyAmount, 
  currency, 
  buyItem, 
  buyItemFail, 
  unpickItem 
}) => {
  if (item !== null) {
    return (
      <div className={styles.back}>
        <div className={styles.window}>
          <div className={styles.modal}>
            <ItemCard item={item} />
            <button onClick={() => {
              if (moneyAmount[currency] < item[currency]) {
                buyItemFail({
                  message: `Не хватает ${item[currency]-moneyAmount[currency]} ${currency}`
                });
                unpickItem();
              } else {
                buyItem({ item });
                unpickItem()
              }
            }
            }>Купить</button>
            <button onClick={() => unpickItem()}>Отмена</button>
          </div>
        </div>
      </div>
    );
  } else return false;
}