import React from 'react';

import styles from './styles.module.scss';

export default ({ item, currency }) => {
  return (
    <div
      className={styles.card}
    >
      <div className={styles.img}>
        <img src={require(`../../../img/${item.img}`)} alt={item.img} />
      </div>
      <div className={styles.name}>{item.name}</div> 
      <div className={styles.price}>{item[currency] + ' ' + currency}</div> 
      <div className={styles.count}>{`Осталось ${item.count} шт.`}</div>
    </div>
  )
}