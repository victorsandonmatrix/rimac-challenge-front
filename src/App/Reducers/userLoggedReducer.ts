import { SET_USER_LOGGED } from "../Actions/userlogged";

interface UserLogged {
  dni: string;
  ruc: string;
  celular: string;
  placa: string;
}

const initialState: UserLogged = {
  dni: "",
  ruc: "",
  celular: "",
  placa: "",
};

export function userReducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_USER_LOGGED:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
