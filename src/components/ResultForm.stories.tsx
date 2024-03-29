import { Flex, Typography } from 'antd';
import ResultForm from './ResultForm';

export default {
  title: 'ResultForm', 
  component: ResultForm, 
  args: {
    car:"Audi",
    country:"Bishkek"
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
