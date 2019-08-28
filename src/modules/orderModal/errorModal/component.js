import React from 'react';

import styles from './styles.module.scss';

export default ({ 
  message,
  clearErrors,
}) => {
  if (message !== null) {
    return (
      <div className={styles.back}>
        <div className={styles.window}>
          <div className={styles.modal}>
            <div>{message}</div>
            <button onClick={() => clearErrors()}>OK</button>
          </div>
        </div>
      </div>
    );
  } else return false;
}