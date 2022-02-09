// Tests
//

const priceFor = (item: string) => {
  switch (item) {
    case 'A':
      return 50;
    case 'B':
      return 30;
    default:
      throw new Error(`No known price for '${item}'`);
  }
};

export const price = (itemString: string): number =>
  [...itemString].reduce((acc, item) => acc + priceFor(item), 0);
