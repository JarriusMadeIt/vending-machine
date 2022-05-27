import { SnacksActionTypes } from "./snackActionTypes";

/**
 * Set snacks action
 * @param payload Snack[]
 * @returns void
 */
export const setSnacks = (payload: any) => ({
  type: SnacksActionTypes.SET_SNACKS,
  payload,
});

/**
 * Buy snack action
 * @param payload snack id
 * @returns void
 */
export const buySnack = (payload: any) => ({
  type: SnacksActionTypes.BUY_SNACK,
  payload,
});
