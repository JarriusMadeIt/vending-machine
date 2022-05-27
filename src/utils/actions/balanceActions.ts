import { BalanceActionTypes } from "./balanceActionTypes";

/**
 * Add funds action
 * @param payload Amount in USD
 * @returns void
 */
export const addFunds = (payload: string) => ({
  type: BalanceActionTypes.ADD_FUNDS,
  payload,
});

/**
 * Reset funds action
 * @returns void
 */
export const resetFunds = () => ({
  type: BalanceActionTypes.RESET_FUNDS,
});
