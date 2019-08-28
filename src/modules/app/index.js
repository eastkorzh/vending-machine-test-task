import React from 'react';

import ItemsGrid from '../itemsGrid';
import Money from '../money';

import styles from './styles.module.scss'

export default () => {
  return(
    <>
      <header className={styles.grid}>
        <h1 className={styles.headText}>Вендинговый аппарат</h1>
        <Money />
      </header>
      <section>
        <ItemsGrid />
      </section>
    </>
  )
}