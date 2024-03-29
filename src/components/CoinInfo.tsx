import React from "react";
import { Flex, Typography } from "antd";
import { CoinInfoProps } from "../types/types";

const CoinInfo: React.FC<CoinInfoProps["coin"]> = ({
  name,
  symbol,
  icon,
  withSymbol,
}) => {
  return (
    <>
      <Flex align="center">
        <img src={icon} alt={name} style={{ width: 40, marginRight: 10 }} />
        <Typography.Title level={2} style={{ margin: 0 }}>
          {withSymbol && <span>({symbol})</span>} {name}
        </Typography.Title>
      </Flex>
    </>
  );
};

export default CoinInfo;
