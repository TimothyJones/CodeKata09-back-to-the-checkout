import { Receipt } from "types";

export const unmarshalItemString = (itemString: string): Receipt => ({
  items: [...itemString],
  price: 0,
});
