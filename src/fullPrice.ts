import { fullPriceFor } from 'items';
import { Item, Receipt } from 'types';

export const calculateFullPrice = (items: Item[]): Receipt => ({
  items,
  price: items.reduce((acc, item) => acc + fullPriceFor(item), 0),
});
