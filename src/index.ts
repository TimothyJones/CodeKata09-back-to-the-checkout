import { discountRuleCountAtPrice } from 'discounts';
import { calculateFullPrice } from 'fullPrice';
import { Receipt, ReceiptTransformationFunction } from 'types';
import { unmarshalItemString } from 'unmarshaller';

const applyReceiptRules = (
  rules: Array<ReceiptTransformationFunction>,
  receipt: Receipt
) =>
  rules.reduce(
    (previousReceipt, discount) => discount(previousReceipt),
    receipt
  ).price;

const calculateFinalPrice = (receipt: Receipt) =>
  applyReceiptRules(
    [
      discountRuleCountAtPrice('B', 2, 45),
      discountRuleCountAtPrice('A', 3, 130),
    ],
    calculateFullPrice(receipt)
  );

export const price = (itemString: string): number =>
  calculateFinalPrice(unmarshalItemString(itemString));
