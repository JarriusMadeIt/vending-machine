import { SnacksActionTypes } from "../actions/snackActionTypes";
import { Snack } from "../types";

const initialState = {
  snacks: [],
};

const snacksReducer = (
  state = initialState,
  { type, payload }: { type: any; payload: any }
) => {
  switch (type) {
    case SnacksActionTypes.SET_SNACKS:
      return {
        ...state,
        snacks: payload,
      };
    case SnacksActionTypes.BUY_SNACK:
      return {
        ...state,
        snacks: state.snacks.map((snack: Snack) =>
          snack.id === payload
            ? {
                ...snack,
                count: snack.count - 1,
              }
            : snack
        ),
      };
    default:
      return state;
  }
};

export default snacksReducer;
