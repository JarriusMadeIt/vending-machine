/**
 * Snack type
 */
export type Snack = {
  id: string;
  type: string;
  count: number;
  price: {
    value: number;
    currency: {
      cc: string;
      symbol: string;
      name: string;
    };
  };
};
