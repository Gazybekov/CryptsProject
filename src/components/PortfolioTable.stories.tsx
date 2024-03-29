import { Table } from "antd";
import PortfolioTable, { columns } from "./PortfolioTable";
import { data } from "../helpers/const";
export default {
  title: "PortfolioTable",
  component: PortfolioTable,
  args: {
    children: "nameBitcoin",
    content: "Hello",
  },
};
const Template = (args: any) => (
  <Table columns={columns} dataSource={data} {...args} />
);
export const Default = Template.bind({});
