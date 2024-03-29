import { Button, Result } from "antd";
import React, { RefObject } from "react";
import { Coin } from "../types/types";

interface ResultFormProps {
  coin: Coin | null;
  onClose: () => void;
  cryptRef: RefObject<{ amount: number; price: number }>;
}

const ResultForm: React.FC<ResultFormProps> = ({ coin, onClose, cryptRef }) => {
  return (
    <>
      <Result
        status="success"
        title="Крипта добавлена!"
        subTitle={`Добавлено ${cryptRef.current?.amount} of ${
          coin ? coin.name : null
        } by price ${cryptRef.current?.price} `}
        extra={[
          <Button type="primary" key="console" onClick={onClose}>
            Close
          </Button>,
          <Button key="buy">Buy Again</Button>,
        ]}
      />
    </>
  );
};

export default ResultForm;
