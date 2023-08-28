import { combineReducers, createStore } from "redux";
import { montoReducer } from "./Reducers/montoReducer";
import { sumaReducer } from "./Reducers/sumaReducer";

const rootReducer = createStore(
  combineReducers({
    // Add reducers here
    monto: montoReducer,
    suma: sumaReducer,
  })
);

export default rootReducer;
