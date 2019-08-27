export const USD_course = 67;
export const EUR_course = 1.11;

function CreateItem(name, count, USD, img) {
  this.name = name || 'no name';
  this.count = count || 0;
  this.USD = USD || 0;
  this.RUB = Math.ceil(USD*USD_course*100)/100 || 0;
  this.EUR = Math.ceil(USD*EUR_course*100)/100 || 0;
  this.img = img || '404.png'
}

const defaultItems = [
  new CreateItem('Coca-Cola', 200, 1.5, 'cola.png'),
  new CreateItem('Fanta', 20, 1.55, 'fanta.png'),
  new CreateItem('Sprite', 20, 1.4, 'sprite.png'),
  new CreateItem('Байкал', 20, 1.3, 'байкал.jpg'),
  new CreateItem('Snickers', 50, 0.8, 'snickers.png'),
  new CreateItem('Mars', 50, 0.7, 'mars.png'),
  new CreateItem('Bounty', 50, 0.9, 'bounty.png'),
  new CreateItem('Lays - Бекон', 40, 1, 'beacon.png'),
  new CreateItem('Lays - Сметана и лук', 40, 1, 'onion.png'),
];

export const setItems = (items) => localStorage.items = JSON.stringify(items);
export const getItems = () => JSON.parse(localStorage.items);

if (!localStorage.items) setItems(defaultItems);
