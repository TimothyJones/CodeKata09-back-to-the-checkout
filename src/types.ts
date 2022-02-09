export type Item = string;

export type ReceiptTransformationFunction = (receipt: Receipt) => Receipt;
export interface Receipt {
  items: Item[];
  price: number;
}
