import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Image } from "../../Atoms/Image/Image";
import { Text } from "../../Atoms/Text/Text";

import { Action, Arrow, Head, Info, Wrapper } from "./styles";

import { SET_MONTO } from "../../../App/Actions/monto";

import Add from "../../../Assets/Svg/gl_add.svg";
import ArrowImg from "../../../Assets/Svg/chevrot.svg";
import Remove from "../../../Assets/Svg/gl_remove.svg";

interface Props {
  img: string;
  text: string;
  title: string;
  aumentar: number;
  isActive?: boolean;
}

export const Cobertura: FC<Props> = ({
  img,
  title,
  text,
  aumentar,
  isActive,
}) => {
  const [isShowMore, setIsShowMore] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const { value } = useSelector((state: any) => state.monto);

  const dispatch = useDispatch();

  const addOrRemove = () => {
    const val = !isAdded ? value + aumentar : value - aumentar;
    dispatch({ type: SET_MONTO, payload: val });
  };

  useEffect(() => {
    if (!isActive && isAdded && aumentar === 20) {
      setIsAdded(false);
      dispatch({ type: SET_MONTO, payload: value - 20 });
    }
  }, [isActive, isAdded, value, dispatch, aumentar]);

  return (
    <Wrapper isActive={isActive}>
      <Image src={img} alt={title.split(" ")[0]} />

      <Info>
        <Head>
          <Text size="1.25rem" color="#494f66">
            {title}
          </Text>

          <Arrow isActive={isShowMore} onClick={() => setIsShowMore((v) => !v)}>
            <Image src={ArrowImg} alt="arrow" />
          </Arrow>
        </Head>

        <Action
          onClick={() => {
            setIsAdded((v) => !v);
            addOrRemove();
          }}
        >
          <div>
            <Image src={isAdded ? Remove : Add} alt="icon" />
          </div>

          <Text size="0.75rem" weight="bold" highlight>
            {isAdded ? "QUITAR" : "AGREGAR"}
          </Text>
        </Action>

        {isShowMore && (
          <Text size="14px" color="#676f8f">
            {text}
          </Text>
        )}
      </Info>
    </Wrapper>
  );
};
