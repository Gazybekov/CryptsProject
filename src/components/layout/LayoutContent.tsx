import React, { useEffect } from "react";
import { Layout, Typography } from "antd";
import PortfolioGraf from "../PortfolioGraf";
import PortfolioTable from "../PortfolioTable";
import "./LayoutContent.scss";
import { useDispatch } from "react-redux";
import { getCoins } from "../../store/actions/cryptActions";
import {
  useCryptSelector,
  useNewCaseSelector,
} from "../../helpers/useSelector";
interface LayoutContentProps {}
const LayoutContent: React.FC<LayoutContentProps> = () => {
  const crypts = useCryptSelector();
  const newCase = useNewCaseSelector();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCoins() as any);
  }, []);

  const cryptoPriceMap: { [key: string]: number } = crypts.reduce((acc, c) => {
    if (c.id !== undefined) {
      acc[c.id] = c.price;
    }
    return acc;
  }, {} as { [key: string]: number });
  const totalAmount = newCase
    .map((elem) => elem.amount * cryptoPriceMap[elem.id])
    .reduce((acc, curr) => (acc += curr), 0);

  return (
    <Layout.Content className="content">
      <Typography.Title level={3} className="ant-typography title">
        {totalAmount.toFixed(2)}$
      </Typography.Title>
      <PortfolioGraf />
      <PortfolioTable />
    </Layout.Content>
  );
};

export default LayoutContent;
