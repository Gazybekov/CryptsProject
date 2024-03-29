import { Case } from "../types/types";

export const API: string = "https://openapiv1.coinstats.app";
export const API_COINS: string = "http://localhost:8000/coins";
export const data = [
  {
    key: 1,
    name: "bitcoin",
    price: 47000,
    amount: 5,
  },
  {
    key: 2,
    name: "bnb",
    price: 13000,
    amount: 2,
  },
];

export const getConfig = (): {
  headers: { accept: string; "X-API-KEY": string };
} => {
  const config = {
    headers: {
      accept: "application/json",
      "X-API-KEY": "OwaOwoN7FEKePWb6/m0R0GtRN47hxy5wIxbrp7gCxlQ=",
    },
  };
  return config;
};

export const briefCase = [
  {
    id: "bitcoin",
    amount: 0.02,
    price: 4555,
    date: new Date(),
  },
  {
    id: "ethereum",
    amount: 5,
    price: 2400,
    date: new Date(),
  },
] as { id: string; amount: number; price: number; date: Date }[];

export const percentFunc = (a: number, b: number): number => {
  return +(100 * Math.abs((a - b) / ((a + b) / 2))).toFixed(2);
};

export const strUp = (str: string): string => {
  return str.toUpperCase();
};

type ValidateMessages = {
  required: string;
  types: {
    number: string;
  };
  number: {
    range: string;
  };
};

export const validateMessages: ValidateMessages = {
  required: "${label} is required",
  types: {
    number: "${label} is not a valid number",
  },
  number: {
    range: "${label} must be between ${min} and ${max} ",
  },
};

export const localStorageSetItem = (crypt: Case[]) => {
  localStorage.setItem("newBriefCase", JSON.stringify(crypt));
};
