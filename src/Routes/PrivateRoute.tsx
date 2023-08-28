import { FC, useEffect } from "react";
import { useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";

interface Props {
  children: JSX.Element;
}

export const PrivateRoute: FC<Props> = ({ children }) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const userLogged: any = queryClient.getQueryData("userlogged");

  useEffect(() => {
    if (!userLogged) {
      navigate("/login");
    }
  }, [userLogged]);

  return children;
};
