import React from 'react';
import { Dropdown } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';

export default ({ currency, changeCurrency }) => {
  let currencyForDropdown = null;

  if (currency === 'RUB') currencyForDropdown = 'rouble';
  if (currency === 'USD') currencyForDropdown = 'dollar';
  if (currency === 'EUR') currencyForDropdown = 'euro';

  return (
    <div style={{height: '37px'}}>
      <Dropdown 
      text={currency}
      icon={currencyForDropdown}
      floating
      labeled
      button
      className='icon'
      >
        <Dropdown.Menu>
          <Dropdown.Item 
            icon='rouble'  
            text='RUB'
            onClick={() => {
              changeCurrency({currency: 'RUB'});
            }}
          />
          <Dropdown.Item 
            icon='dollar' 
            text='USD'
            onClick={() => {
              changeCurrency({currency: 'USD'});
            }}
          />
          <Dropdown.Item 
            icon='euro' 
            text='EUR'
            onClick={() => {
              changeCurrency({currency: 'EUR'});
            }}
          />
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
};
