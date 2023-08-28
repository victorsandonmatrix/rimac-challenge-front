import { SET_MONTO } from "../Actions/monto";

interface Monto {
  value: number;
}

const initialState: Monto = { value: 20 };

export function montoReducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_MONTO:
      return {
        value: action.payload,
      };
    default:
      return state;
  }
}
