import React from "react";
import { Table } from "antd";

import { useCryptSelector, useNewCaseSelector } from "../helpers/useSelector";

interface PortfolioTableProps {}

export const columns: any = [
  {
    title: "Name",
    dataIndex: "name",
    onFilter: (value: string, record: { name: string }) =>
      record.name.indexOf(value) === 0,
    sorter: (a: { name: string }, b: { name: string }) =>
      a.name.length - b.name.length,
    sortDirections: ["descend"],
  },
  {
    title: "Price, $",
    dataIndex: "price",
    defaultSortOrder: "descend",
    sorter: (a: { price: number }, b: { price: number }) => a.price - b.price,
  },
  {
    title: "Amount",
    dataIndex: "amount",
    defaultSortOrder: "descend",
    sorter: (a: { amount: number }, b: { amount: number }) =>
      a.amount - b.amount,

    onFilter: (value: string, record: { address: string }) =>
      record.address.indexOf(value) === 0,
  },
];

const PortfolioTable: React.FC<PortfolioTableProps> = () => {
  const crypts = useCryptSelector();
  const newCase = useNewCaseSelector();
  const data = newCase.map((elem) => ({
    key: elem.id,
    name: elem.id,
    price: elem.price,
    amount: elem.amount,
  }));
  return crypts ? (
    <Table pagination={false} columns={columns} dataSource={data} />
  ) : null;
};

export default PortfolioTable;
