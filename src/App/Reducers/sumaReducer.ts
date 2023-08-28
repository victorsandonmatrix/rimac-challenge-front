import { SET_SUMA } from "../Actions/suma";

interface Suma {
  value: number;
}

const initialState: Suma = { value: 14300 };

export function sumaReducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_SUMA:
      return {
        value: action.payload,
      };
    default:
      return state;
  }
}
