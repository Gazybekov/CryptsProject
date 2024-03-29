import { Button, Input, Modal } from "antd";
import { useState } from "react";
import { Case, CaseSide } from "../types/types";
import { editCrypt, processCryptsData } from "../store/slice/crypts";
import { useDispatch } from "react-redux";
const EditCrypt = ({ elem }: { elem: Case }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [id, setId] = useState(elem.id);
  const [totalAmount, setTotalAmount] = useState(elem.totalAmount);
  const [amount, setAmount] = useState(elem.amount);
  const dispatch = useDispatch();
  console.log(id);
  const handleEdit = () => {
    const updatedCase: Case = {
      id: id,
      date: elem.date,
      price: elem.price,
      totalAmount: totalAmount,
      amount: amount,
    };
    console.log(updatedCase);
    dispatch(editCrypt(updatedCase));
    dispatch(processCryptsData());
  };
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    handleEdit();
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Edit
      </Button>
      <Modal
        title="Edit Crypt"
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Input
          value={id}
          onChange={(e) => setId(e.target.value)}
          type="text"
          readOnly={false}
        />
        <Input
          value={totalAmount.toString()}
          onChange={(e) => setTotalAmount(parseInt(e.target.value))}
          type="text"
        />
        <Input
          value={amount.toString()}
          onChange={(e) => setAmount(parseInt(e.target.value))}
          type="text"
        />
        <Button onClick={handleEdit}>Save</Button>
      </Modal>
    </div>
  );
};
export default EditCrypt;
