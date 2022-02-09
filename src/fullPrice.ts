import { fullPriceFor } from 'items';
import { Receipt } from 'types';

export const calculateFullPrice = (receipt: Receipt): Receipt => ({
  ...receipt,
  price: receipt.items.reduce((acc, item) => acc + fullPriceFor(item), 0),
});
