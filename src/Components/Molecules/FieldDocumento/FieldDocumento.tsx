import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { Field } from "../../Atoms/Field";

import { Wrapper } from "./styles";

export const FieldDocumento = () => {
  const [isDni, setIsDni] = useState(true);
  const { setValue, reset } = useFormContext();

  useEffect(() => {
    setValue("ruc", 11111111111);
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value === "dni") {
      reset({ dni: "" });
      setValue("ruc", 11111111111);
      setIsDni(true);
    } else {
      reset({ ruc: "" });
      setValue("dni", 11111111);
      setIsDni(false);
    }
  };

  return (
    <Wrapper>
      <select id="" onChange={handleChange}>
        <option value="dni">DNI</option>
        <option value="ruc">RUC</option>
      </select>

      <Field
        id={isDni ? "dni" : "ruc"}
        placeholder={isDni ? "DNI" : "RUC"}
        type={"number"}
        width={"199px"}
      />
    </Wrapper>
  );
};
