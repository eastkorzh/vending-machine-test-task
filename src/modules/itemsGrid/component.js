import React from 'react';

import styles from './styles.module.scss';

export default ({ items, currency, pickItem, requestItems }) => {
  React.useEffect(() => {
    if (!items.length) requestItems() 
  })
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
            onClick={() => pickItem({ item })}
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