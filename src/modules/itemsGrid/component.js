import React from 'react';

import styles from './styles.module.scss';

export default ({ items, currency, buyItem }) => {
  return(
    <div className={styles.grid}>
      {items.map((item) => {
        let price = null;
        if (currency === 'USD') price = item.USD;
        if (currency === 'RUB') price = item.RUB;
        if (currency === 'EUR') price = item.EUR;
        return (
          <div 
            key={item.name} 
            className={styles.card}
            onClick={() => buyItem({ name: item.name })}
          >
            <div className={styles.img}>
              <img src={require(`../../img/${item.img}`)} alt={item.img} />
            </div>
            <div>{item.name}</div> 
            <div>{price + ' ' + currency}</div> 
          </div>
        )
      })}
    </div>
  )
}