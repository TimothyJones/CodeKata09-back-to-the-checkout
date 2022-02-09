import { fullPriceFor } from 'items';
import { Item, Receipt } from 'types';

const discountForNItems = (n: number, item: Item, discountedPrice: number) =>
  n * fullPriceFor(item) - discountedPrice;

const count = ({ items }: Receipt, item: string): number =>
  items.reduce((acc, it) => (it === item ? 1 : 0) + acc, 0);

export const discountRuleCountAtPrice = (
  item: Item,
  n: number,
  discountedPrice: number
) => (receipt: Receipt): Receipt => ({
  ...receipt,
  price:
    receipt.price -
    Math.floor(count(receipt, item) / n) *
      discountForNItems(n, item, discountedPrice),
});
