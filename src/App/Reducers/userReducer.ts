import { User } from "../../Interfaces/User";

import { SET_USER } from "../Actions/user";

const initialState: User = {
  id: 0,
  email: "",
  name: "",
  username: "",
  phone: "",
  website: "",
};

export function userReducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
