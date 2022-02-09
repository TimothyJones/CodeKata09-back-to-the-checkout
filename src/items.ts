export const fullPriceFor = (item: string): number => {
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
