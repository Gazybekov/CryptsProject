export type Coin = {
  totalAmount: string;
  icon: string;
  name: string;
  symbol: string;
  id: string | undefined;
  price: number;
  withSymbol: boolean;
  priceChange1h: number;
  priceChange1d: number;
  priceChange1w: number;
  priceBtc: number;
  marketCap: number;
  contractAddress: string;
};

export type CoinInfoProps = {
  coin: {
    icon: string;
    name: string;
    symbol: string;
    id: string | undefined;
    price: number;
    withSymbol: boolean;
  };
  coin2: {
    icon: string;
    name: string;
    symbol: string;
    id: string | undefined;
    price: number;
    withSymbol: boolean;
    priceChange1h: number;
    priceChange1d: number;
    priceChange1w: number;
    priceBtc: number;
    marketCap: number;
    contractAddress: string;
  };
};

export type Case = {
  id: string | undefined;
  date: Date;
  price: number;
  amount: number;
  totalAmount: number;
};

export type CaseSide = {
  informationPrice: number;
  informationPercent: number;
  totalProfit: number;
  totalAmount: number;
  id: string;
  amount: number;
  date: Date;
  price: number;
};

export type CryptsState = {
  crypts: Coin[];
  status: string | null;
  error: any;
  newCase: any[];
  newBriefCase: Case[];
  coins: Coin[];
};
