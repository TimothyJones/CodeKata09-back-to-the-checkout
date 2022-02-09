// Tests
//

import { Item, Receipt } from 'types';

const fullPriceFor = (item: string) => {
  switch (item) {
    case 'A':
      return 50;
    case 'B':
      return 30;
    case 'C':
      return 20;
    case 'D':
      return 15;
    default:
      throw new Error(`No known price for '${item}'`);
  }
};

const calculateFullPrice = (items: Item[]): Receipt => ({
  items,
  price: items.reduce((acc, item) => acc + fullPriceFor(item), 0),
});

const count = ({ items }: Receipt, item: string): number =>
  items.reduce((acc, it) => (it === item ? 1 : 0) + acc, 0);

const applyDiscountsForThreeA = (receipt: Receipt) => {
  const PRICE_FOR_THREE_A = 130;
  const discountForThreeA = 3 * fullPriceFor('A') - PRICE_FOR_THREE_A;

  const countA = count(receipt, 'A');

  return {
    ...receipt,
    price: receipt.price - Math.floor(countA / 3) * discountForThreeA,
  };
};

const unmarshalItemString = (itemString: string): Item[] => [...itemString];

export const price = (itemString: string): number =>
  applyDiscountsForThreeA(calculateFullPrice(unmarshalItemString(itemString)))
    .price;
