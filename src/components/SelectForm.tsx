import { Select, Space } from "antd";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Coin } from "../types/types";
import { getCoins } from "../store/actions/cryptActions";
import { useCoinsSelector, useCryptSelector } from "../helpers/useSelector";

interface SelectFormProps {
  setCoin: React.Dispatch<React.SetStateAction<Coin | null>>;
}

const SelectForm: React.FC<SelectFormProps> = ({ setCoin }) => {
  const crypts = useCryptSelector();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCoins() as any);
  }, []);
  const coins = useCoinsSelector();
  console.log(coins);
  return (
    <>
      <Select
        style={{ width: "100%" }}
        onSelect={(v) => setCoin(crypts.find((c) => c.id === v) || null)}
        value="Выбери крипту"
        optionLabelProp="label"
        options={crypts.map((coin) => ({
          label: coin.name,
          value: coin.id,
          icon: coin.icon,
        }))}
        optionRender={(option) => (
          // data прописывает antd
          <Space>
            <img
              style={{ width: 30 }}
              src={option.data.icon}
              alt={option.data.label}
            />
            {option.data.label}
          </Space>
        )}
      />
    </>
  );
};
export default SelectForm;
