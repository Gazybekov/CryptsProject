import { Divider, Form, InputNumber, Button, DatePicker } from "antd";
import React, { useCallback, useMemo, useRef, useState } from "react";
import ResultForm from "./ResultForm";
import SelectForm from "./SelectForm";
import { validateMessages } from "../helpers/const";
import { processCryptsData, addNewCase } from "../store/slice/crypts";
import { useDispatch } from "react-redux";
import CoinInfo from "./CoinInfo";
import { Case, Coin } from "../types/types";
import { addCrypt } from "../store/actions/cryptActions";
interface AddCryptProps {
  onClose: () => void;
}
const AddCrypt: React.FC<AddCryptProps> = ({ onClose }) => {
  const [coin, setCoin] = useState<Coin | null>(null);
  const [form] = Form.useForm();
  const [result, setResult] = useState(false);
  const cryptRef = useRef<any>();
  const dispatch = useDispatch();
  console.log(coin);
  const handleClick = useCallback(
    (values: any) => {
      const newCrypt: Case = {
        id: coin?.id,
        amount: values.amount,
        price: values.price,
        date: values.date?.$d.toISOString() ?? new Date().toISOString(),
        totalAmount: 0,
      };
      cryptRef.current = newCrypt;
      setResult(!result);
      dispatch(addCrypt(newCrypt) as any);
      dispatch(addNewCase(newCrypt));
      dispatch(processCryptsData());
    },
    [coin, dispatch, result]
  );
  const coinInfoMemo = useMemo(() => {
    return {
      name: coin?.name || "",
      symbol: coin?.symbol || "",
      icon: coin?.icon || "",
      withSymbol: coin?.withSymbol || false,
    };
  }, [coin]);
  if (result) {
    return <ResultForm cryptRef={cryptRef} coin={coin} onClose={onClose} />;
  }
  const handleAmountChange = (value: number | string | undefined | null) => {
    form.setFieldsValue({
      total: +(value || 0) * coin!.price,
    });
  };
  if (!coin) {
    return (
      <SelectForm
        setCoin={setCoin as React.Dispatch<React.SetStateAction<any | null>>}
      />
    );
  }
  return (
    <Form
      form={form}
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 10,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        price: +coin.price.toFixed(2),
      }}
      onFinish={handleClick}
      validateMessages={validateMessages}
    >
      <CoinInfo {...coinInfoMemo} id={coin.id} price={0} />
      <Divider />

      <Form.Item
        label="Amount"
        name="amount"
        rules={[
          {
            required: true,
            type: "number",
            min: 0,
          },
        ]}
      >
        <InputNumber onChange={handleAmountChange} style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item label="Price" name="price">
        <InputNumber disabled style={{ width: "100%" }} />
      </Form.Item>
      <Form.Item label="Date and time " name="date">
        <DatePicker showTime />
      </Form.Item>
      <Form.Item label="Total" name="total">
        <InputNumber disabled style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Купить крипту
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddCrypt;
