import React from 'react';

import styles from './styles.module.scss';

export default ({ 
  boughtItem,
  clearBought,
}) => {
  if (boughtItem !== null) {
    return (
      <div className={styles.back}>
        <div className={styles.window}>
          <div className={styles.modal}>
            <div>Заберите</div>
            <div>{boughtItem.name}</div>
            <button onClick={() => clearBought()}>OK</button>
          </div>
        </div>
      </div>
    );
  } else return false;
}