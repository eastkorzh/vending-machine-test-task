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
      <div>{item.name}</div> 
      <div>{item[currency] + ' ' + currency}</div> 
      <div>{item.count}</div>
    </div>
  )
}