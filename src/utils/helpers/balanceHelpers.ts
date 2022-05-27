export const addToBalance = (balance: number, amount: number) => {
  return (balance + amount).toFixed(2);
};

export const calculateChange = (balance: number, amount: number) => {
  return (balance - amount).toFixed(2);
};
