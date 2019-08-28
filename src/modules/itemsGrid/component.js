import React from 'react';

import ItemCard from './itemCard';
import OrderModal from '../orderModal'
import ErrorModal from '../orderModal/errorModal'
import SuccessModal from '../orderModal/successModal'
import styles from './styles.module.scss';

export default ({ items, pickItem, requestItems }) => {
  React.useEffect(() => {
    if (!items.length) requestItems() 
  })
  return(
    <div className={styles.grid}>
      {items.map((item) => (
        <div key={item.name} onClick={() => pickItem({ item })}>
          <ItemCard item={item} />
        </div>
      ))}
      <OrderModal />
      <ErrorModal />
      <SuccessModal />
    </div>
  )
}
