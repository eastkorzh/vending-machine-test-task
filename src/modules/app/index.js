import React from 'react';

import ItemsGrid from '../itemsGrid';
import Money from '../money';

import styles from './styles.module.scss'

export default () => {
  return(
    <>
      <header className={styles.grid}>
        <div>Вендинговый аппарат</div>
        <Money />
      </header>
      <section>
        <ItemsGrid />
      </section>
    </>
  )
}