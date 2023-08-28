import { FC, HTMLInputTypeAttribute } from "react";
import { useFormContext } from "react-hook-form";

import { Wrapper } from "./styles";

interface Props {
  type: HTMLInputTypeAttribute;
  id: string;
  width?: string;
  margin?: string;
  height?: string;
  setFocus?: (val: boolean) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FC<Props> = ({
  id,
  type,
  width,
  margin,
  height,
  onChange,
  setFocus,
}) => {
  const { register } = useFormContext();
  const { onChange: onChnge, ...rest } = register(id);

  return (
    <Wrapper
      id={id}
      type={type}
      width={width}
      height={height}
      margin={margin}
      {...rest}
      onFocus={() => {
        setFocus && setFocus(true);
      }}
      onChange={(event) => {
        onChnge(event);
        onChange && onChange(event);
      }}
    />
  );
};
