// Tests
//

import { discountRuleCountAtPrice } from 'discounts';
import { calculateFullPrice } from 'fullPrice';
import { Item, Receipt, ReceiptTransformationFunction } from 'types';

const unmarshalItemString = (itemString: string): Item[] => [...itemString];

const applyReceiptRules = (
  rules: Array<ReceiptTransformationFunction>,
  receipt: Receipt
) =>
  rules.reduce(
    (previousReceipt, discount) => discount(previousReceipt),
    receipt
  ).price;

const calculateFinalPrice = (items: Item[]) =>
  applyReceiptRules(
    [
      discountRuleCountAtPrice('B', 2, 45),
      discountRuleCountAtPrice('A', 3, 130),
    ],
    calculateFullPrice(items)
  );

export const price = (itemString: string): number =>
  calculateFinalPrice(unmarshalItemString(itemString));
