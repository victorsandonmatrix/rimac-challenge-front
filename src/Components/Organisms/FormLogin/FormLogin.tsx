import * as Yup from "yup";
import { useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { Button } from "../../Atoms/Button/Button";
import { Field } from "../../Atoms/Field";
import { Text } from "../../Atoms/Text/Text";

import { FieldDocumento } from "../../Molecules/FieldDocumento/FieldDocumento";
import { TerminosCondiciones } from "../../Molecules/TerminosCondiciones";

import { getUser } from "../../../Services/User/User.service";

import { Wrapper } from "./styles";

const schema = Yup.object().shape({
  dni: Yup.string()
    .required("El campo es obligatorio")
    .length(8, "El campo debe tener 8 caracteres"),
  ruc: Yup.string()
    .required("El campo es obligatorio")
    .length(11, "El campo debe tener 11 caracteres"),
  celular: Yup.string()
    .required("El campo es obligatorio")
    .length(9, "El campo debe tener 9 caracteres"),
  placa: Yup.string()
    .required("El campo es obligatorio")
    .length(7, "El campo debe tener 7 caracteres"),
});

const fetchUser = async () => {
  return getUser(2);
};

export const FormLogin = () => {
  const [tc, setTc] = useState(false);
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { isSuccess } = useQuery("user", fetchUser, {
    refetchOnWindowFocus: false,
  });

  const methods = useForm({
    mode: "all",
    resolver: yupResolver(schema),
  });

  const {
    formState: { isValid },
  } = methods;

  const onSubmit = (data: any) => {
    queryClient.setQueryData("userlogged", data);
    navigate("/");
  };

  const isDisabledSubmit = !isValid || !tc || !isSuccess;

  return (
    <Wrapper>
      <FormProvider {...methods}>
        <form autoComplete="off" onSubmit={methods.handleSubmit(onSubmit)}>
          <Text size="1.5rem">Déjanos tus datos</Text>

          <FieldDocumento />

          <Field id={"celular"} placeholder="Celular" type={"text"} />

          <Field id={"placa"} placeholder="Placa" type={"text"} />

          <TerminosCondiciones setTc={setTc} />

          <Button type="submit" disabled={isDisabledSubmit}>
            cotízalo
          </Button>
        </form>
      </FormProvider>
    </Wrapper>
  );
};
