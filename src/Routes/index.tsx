import { Routes as Switch, Route } from "react-router-dom";

import { Home } from "../Pages/Home";
import { Login } from "../Pages/Login";
import { Gracias } from "../Pages/Gracias";

import { PrivateRoute } from "./PrivateRoute";

export const Routes = () => {
  return (
    <Switch>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />

      <Route path="/gracias" element={<Gracias />} />

      <Route path="/login" element={<Login />} />

      <Route
        path="*"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
    </Switch>
  );
};
