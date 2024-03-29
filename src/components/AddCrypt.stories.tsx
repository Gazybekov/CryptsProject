import AddCrypt from './AddCrypt';
import { Flex, Typography } from 'antd';

export default {
  title: 'AddCrypt', 
  component: AddCrypt, 
  args: {
    typography: "Bnb",
    content: "Hello",
  },
}

const Template = (args: any) => (
    <Flex>
      <img
        src="https://pbs.twimg.com/profile_images/1701878932176351232/AlNU3WTK_400x400.jpg"
        style={{ width: 40, marginRight: 10 }}
      />
      <Typography.Title level={2} style={{ margin: 0 }}>
        {"Bitcoin" && <span>({"Crypt"})</span>} {"Solana"}
      </Typography.Title>
    </Flex>
  );
  export const Default = Template.bind({});
