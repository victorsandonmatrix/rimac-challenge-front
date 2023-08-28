import { FC, HTMLInputTypeAttribute, useState } from "react";
import { useFormContext } from "react-hook-form";

import { Input } from "../Input/Input";

import { Wrapper } from "./styles";

interface Props {
  placeholder: string;
  type: HTMLInputTypeAttribute;
  width?: string;
  id: string;
}

export const Field: FC<Props> = ({ placeholder, type, width, id }) => {
  const [isFocus, setIsFocus] = useState(false);

  const {
    formState: { errors },
  } = useFormContext();

  const hasErrors = errors[id]?.message;

  return (
    <Wrapper isFocus={isFocus} width={width} error={hasErrors}>
      <span>{placeholder}</span>
      <Input id={id} type={type} setFocus={setIsFocus} />
    </Wrapper>
  );
};
