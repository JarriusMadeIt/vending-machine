import { BalanceActionTypes } from "../actions/balanceActionTypes";

const initialState = {
  value: "0.00",
  currency: { cc: "USD", symbol: "$", name: "United States dollar" },
};

const balanceReducer = (
  state = initialState,
  { type, payload }: { type: any; payload: any }
) => {
  switch (type) {
    case BalanceActionTypes.ADD_FUNDS:
      return {
        ...state,
        value: (Number(state.value) + Number(payload)).toFixed(2),
      };
    case BalanceActionTypes.RESET_FUNDS:
      return initialState;
    default:
      return state;
  }
};

export default balanceReducer;
